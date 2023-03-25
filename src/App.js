import React, { useState } from
'react';
import Tesseract from
'tesseract.js';
import QRCode from
'qrcode.react';
function App() {
const [imageUrl, setImageUrl] =
useState("");
const [transcription, 
setTranscription] = useState("");
const handleFileSelect = e => {
const file = e.target.files[0];
const reader = new
FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
setImageUrl(reader.result);
const handleTranscribe = async
() => {
const { data: {text }} = await
Tesseract.recognize(imageUrl,
setTranscription(text),
'eng');
};
return (
<div>
<h1>
Transcribe Image Text </h1>
<label htmlFor="image-file">Select an
image file to transcribe:</
label>
<label>
<input type="file"
id="image-file"
accept="image/*"
onChange={handleFileSelect}
 />
 {imageUrl && <img
 src={imageUrl} alt="Selected
 image" />}
 </label>
<button
onClick={handleTranscribe}
> Transcribe</button>
{transcription && (
<div>
<h2>Transcription:</
h2><p>{transcription}</p>
<QRCode
value={transcription} />
 
);

 </div>

 export default funtion  App();
</div>