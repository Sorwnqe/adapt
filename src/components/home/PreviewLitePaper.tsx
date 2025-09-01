import {
  Center,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useState, useEffect, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io'
import { MdZoomIn, MdZoomOut, MdGetApp } from 'react-icons/md'
import { useLitePaperModal } from '../../ModalContext'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs'

const PreviewLitePaper = () => {
  const { isOpen, onClose } = useLitePaperModal()
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(0.9)
  const [loading, setLoading] = useState(true)

  // 响应式宽度
  const containerWidth = useBreakpointValue({ base: 400, md: 600, lg: 900, xl: 1024 })!

  // 文档加载成功
  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
    setPageNumber(1)
  }, [])

  // 键盘翻页（桌面端）
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'ArrowLeft' && pageNumber > 1) setPageNumber((p) => p - 1)
      if (e.key === 'ArrowRight' && pageNumber < numPages) setPageNumber((p) => p + 1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, pageNumber, numPages])

  // 缩放与下载
  const zoomIn = () => setScale((s) => Math.min(s + 0.2, 3))
  const zoomOut = () => setScale((s) => Math.max(s - 0.2, 0.4))
  const downloadPDF = () => window.open('/AdaptAI_technical_white_paper.pdf', '_blank')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />

      <ModalContent bg="rgba(0,0,0,0.5)" color="white" p={0}>
        {/* 顶部工具栏（桌面端可见） */}
        <ModalHeader
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          justifyContent="right"
          py={2}
          px={4}
          borderBottom="1px solid"
          borderColor="gray.700"
          gap={2}
        >
          <Flex align="center" gap={2}>
            <IconButton
              aria-label="previous"
              icon={<IoIosArrowBack />}
              onClick={() => pageNumber > 1 && setPageNumber((p) => p - 1)}
              isDisabled={pageNumber === 1}
            />
            <Text fontWeight="400" fontSize="14px">
              {pageNumber} / {numPages || '-'}
            </Text>
            <IconButton
              aria-label="next"
              icon={<IoIosArrowForward />}
              onClick={() => pageNumber < numPages && setPageNumber((p) => p + 1)}
              isDisabled={pageNumber === numPages}
            />
          </Flex>

          <Flex align="center" gap={2}>
            <IconButton
              aria-label="zoom out"
              icon={<MdZoomOut />}
              onClick={zoomOut}
              isDisabled={scale <= 0.6}
            />
            <IconButton aria-label="zoom in" icon={<MdZoomIn />} onClick={zoomIn} />
            <IconButton aria-label="Download pdf" icon={<MdGetApp />} onClick={downloadPDF} />
            <IconButton aria-label="close" icon={<IoIosClose />} onClick={onClose} />
          </Flex>
        </ModalHeader>

        <ModalBody
          bg="rgba(0,0,0,0.5)"
          display="flex"
          justifyContent="center"
          p={0}
          overflow="auto"
          alignItems={{ base: 'center', md: 'start' }}
          pt={{ base: '20px', md: '0' }}
        >
          {loading && (
            <Center position="absolute" top={0} left={0} w="full" h="full" zIndex={10}>
              <Spinner size="xl" color="white" />
            </Center>
          )}
          <TransformWrapper
            wheel={{
              disabled: false, // 打开滚轮缩放
              step: 0.1, // 每次滚动改变 0.1 倍
            }}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent>
              <Document
                file="/AdaptAI_technical_white_paper.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={null}
                noData="pdf file load failed"
              >
                <Page
                  pageNumber={pageNumber}
                  width={containerWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  scale={scale}
                />
              </Document>
            </TransformComponent>
          </TransformWrapper>
        </ModalBody>

        {/* 底部工具栏（移动端可见） */}
        <Flex
          position="fixed"
          bottom={0}
          left={0}
          w="100%"
          bg="rgba(0,0,0,0.5)"
          p={2}
          display={{ base: 'flex', md: 'none' }}
          justify="space-around"
          align="center"
        >
          <IconButton
            aria-label="previous"
            icon={<IoIosArrowBack />}
            onClick={() => pageNumber > 1 && setPageNumber((p) => p - 1)}
            isDisabled={pageNumber === 1}
          />
          <Text>
            {pageNumber} / {numPages || '--'}
          </Text>
          <IconButton
            aria-label="next"
            icon={<IoIosArrowForward />}
            onClick={() => pageNumber < numPages && setPageNumber((p) => p + 1)}
            isDisabled={pageNumber === numPages}
          />
          <IconButton
            aria-label="zoom out"
            icon={<MdZoomOut />}
            onClick={zoomOut}
            isDisabled={scale <= 0.4}
          />
          <IconButton aria-label="zoom in" icon={<MdZoomIn />} onClick={zoomIn} />
          <IconButton aria-label="close" icon={<IoIosClose />} onClick={onClose} />
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default PreviewLitePaper
