/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import GFMDataProcessor from "@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor";
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';

export default class ClassicEditor extends ClassicEditorBase {}

function Markdown(editor){
	editor.data.processor = new GFMDataProcessor()
}
// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Markdown,
	CKFinder,
	Paragraph,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
