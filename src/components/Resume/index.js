import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyResume from '../../../public/pdf/Brahm_vanhouzen_develop-resume.pdf';

function Resume() {
	return (
		<PDFViewer>
			<MyResume />
		</PDFViewer>
	);
}

export default Resume;
