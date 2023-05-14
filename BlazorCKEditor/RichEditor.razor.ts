class RichEditor {
    public loadCKEditor(dotNetReference: any, id: string) {
        console.log(new Date());
        (<any>window).ClassicEditor.create(document.getElementById(id), {
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
