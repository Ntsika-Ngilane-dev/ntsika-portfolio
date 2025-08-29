'use client'

import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { useEffect, useState } from 'react'

// Set up the PDF.js worker
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
}

export function PDFViewer({ file, onLoadSuccess }: { file: string; onLoadSuccess: () => void }) {
  const [numPages, setNumPages] = useState<number>()
  const [width, setWidth] = useState(800)

  useEffect(() => {
    // Set initial width
    const updateWidth = () => {
      setWidth(Math.min(800, window.innerWidth - 64))
    }
    
    // Set initial width
    updateWidth()
    
    // Update width on resize
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => {
        setNumPages(numPages)
        onLoadSuccess()
      }}
      loading={
        <div className="flex items-center justify-center p-12">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      }
      error={
        <div className="p-8 text-center">
          <p className="text-red-500">Failed to load PDF. Please try downloading instead.</p>
        </div>
      }
    >
      <Page 
        pageNumber={1} 
        width={width}
        loading={
          <div className="flex items-center justify-center p-12">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        }
      />
    </Document>
  )
}
