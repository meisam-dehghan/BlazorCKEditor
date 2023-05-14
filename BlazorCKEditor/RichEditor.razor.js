class RichEditor {
    loadCKEditor(dotNetReference, id) {
        console.log(new Date());
        window.ClassicEditor.create(document.getElementById(id), {
            licenseKey: '',
        }).then(editor => {
            editor.focus();
            editor.model.document.on('change:data', () => {
                let data = editor.getData();
                dotNetReference.invokeMethodAsync('EditorDataChanged', data);
            });
        }).catch(error => {
            console.error('Oops, something went wrong!');
            console.warn('Build id: ytsax8asnbh1-epiai8lnqen0');
            console.error(error);
        });
    }
}
export function GetInstance() {
    return new RichEditor();
}
//# sourceMappingURL=RichEditor.razor.js.map