# BlazorCKEditor
Provides rich editing capability using CKEditor5 for blazor-based applications. 
In order to use this components on a blazor component, simply bind to the text property as the following shows:
```csharp
<BlazorCKEditor.RichEditor Id="@id" 
                           PlaceHolderText="Place Holder Text"
                           @bind-Text="_settings.SettingValue" />
