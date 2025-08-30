import copy from 'copy-to-clipboard'

interface EmailData {
  firstName: string
  lastName: string
  email: string
}

// 邮件发送服务（安全版本）
class EmailService {
  // 验证表单数据
  static validateEmailData(data: EmailData): { isValid: boolean; message: string } {
    if (!data.firstName.trim()) {
      return { isValid: false, message: 'First name is required' }
    }

    if (!data.lastName.trim()) {
      return { isValid: false, message: 'Last name is required' }
    }

    if (!data.email.trim()) {
      return { isValid: false, message: 'Email is required' }
    }

    // 简单的邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return { isValid: false, message: 'Please enter a valid email address' }
    }

    // 检查字段长度（防止过长输入）
    if (data.firstName.length > 50 || data.lastName.length > 50) {
      return { isValid: false, message: 'Name fields must be less than 50 characters' }
    }

    if (data.email.length > 100) {
      return { isValid: false, message: 'Email must be less than 100 characters' }
    }

    return { isValid: true, message: '' }
  }

  // 转义特殊字符以防止邮件注入 - 保留换行符
  static escapeMailtoParam(text: string): string {
    return text
      .replace(/\r\n/g, '%0D%0A') // Windows 换行符
      .replace(/\n/g, '%0A') // Unix 换行符
      .replace(/\r/g, '%0D') // Mac 换行符
      .replace(/ /g, '%20') // 空格
      .replace(/&/g, '%26') // & 符号
      .replace(/\?/g, '%3F') // ? 符号
      .replace(/#/g, '%23') // # 符号
      .trim()
  }

  // 验证 mailto URL 是否安全
  static isValidMailtoUrl(url: string): boolean {
    try {
      const urlObj = new URL(url)

      // 只允许 mailto 协议
      if (urlObj.protocol !== 'mailto:') {
        return false
      }

      // 验证收件人邮箱格式
      const recipient = urlObj.pathname
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(recipient)) {
        return false
      }

      // 检查是否只包含允许的参数
      const allowedParams = ['subject', 'body', 'cc', 'bcc']
      const searchParams = urlObj.searchParams

      for (const [key] of searchParams) {
        if (!allowedParams.includes(key.toLowerCase())) {
          return false
        }
      }

      return true
    } catch (error) {
      return false
    }
  }

  // 生成邮件主题
  static generateSubject(data: EmailData): string {
    return this.escapeMailtoParam(
      `New Contact Form Submission - ${data.firstName} ${data.lastName}`
    )
  }

  // 生成邮件正文
  static generateEmailBody(data: EmailData): string {
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })

    const emailBody = `Hello Adapt Team,

please input something....

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Submission Time: ${timestamp}
- Source: Website Footer Contact Form

Best regards,
Adapt Website`

    return this.escapeMailtoParam(emailBody)
  }

  // 安全的邮件发送方法 - 使用创建链接元素的方式
  static async sendContactEmailSecure(
    data: EmailData
  ): Promise<{ success: boolean; message: string }> {
    try {
      // 验证数据
      const validation = this.validateEmailData(data)
      if (!validation.isValid) {
        return { success: false, message: validation.message }
      }

      // 生成 mailto URL
      const recipient = 'info@adapt.com'
      const subject = this.generateSubject(data)
      const body = this.generateEmailBody(data)

      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`

      // 安全验证
      if (!this.isValidMailtoUrl(mailtoUrl)) {
        return {
          success: false,
          message: 'Invalid email parameters detected',
        }
      }

      // 检查URL长度（某些邮件客户端有限制）
      if (mailtoUrl.length > 2000) {
        return {
          success: false,
          message: 'Email content too long. Please shorten your information.',
        }
      }

      EmailService.copyEmailToClipboard(data)
      const link = document.createElement('a')
      link.href = mailtoUrl
      link.target = '_self'
      link.rel = 'noopener noreferrer' // 安全属性

      // 添加到DOM并点击
      document.body.appendChild(link)
      link.click()

      // 清理DOM
      setTimeout(() => {
        document.body.removeChild(link)
      }, 100)

      return { success: true, message: 'Email client opened successfully' }
    } catch (error) {
      console.error('Failed to open email client:', error)
      return {
        success: false,
        message: 'Failed to open email client. Please check if you have a mail app installed.',
      }
    }
  }

  static copyEmailToClipboard(data: EmailData) {
    const timestamp = new Date().toLocaleString()
    const emailContent = `
Hello Adapt Team,

please input something....

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Submission Time: ${timestamp}
- Source: Website Footer Contact Form

Best regards,
Adapt Website Contact System`

    copy(emailContent, { format: 'text/plain', message: 'Email copied to clipboard' })
  }
}

export default EmailService
