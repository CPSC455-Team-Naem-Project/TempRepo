import { PDFViewer } from '@react-pdf/renderer';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Fileuploadsidebar from './Fileuploadsidebar';

export default function Notepdfview({options, pdfFilePath} : any) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // @ts-ignore
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Fileuploadsidebar options={options}/>
      <PDFViewer>
      <Document file={pdfFilePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      </PDFViewer>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}