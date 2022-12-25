import "./app.css";
import { useState } from "react";
import QRCode from "qrcode";

function App() {
	const [qrCode, setQrCode] = useState("");
	const [url, setUrl] = useState("");
	const [error, setError] = useState("");

	console.log(error);

	const generateCode = () => {
		QRCode.toDataURL(url, (err, url) => {
			if (err) {
				setTimeout(() => {
					setError("");
				}, 5000);
				setQrCode("");
				setError("Input field must not be empty!");
				return;
			}

			setQrCode(url);
		});
		setUrl("");
	};

	return (
		<div className="app">
			{error && <span className="error">{error}</span>}
			<div className="container">
				<h2 className="title">React QR Code Generator</h2>
				<input
					type="text"
					placeholder="Enter text: e.g url"
					value={url}
					onChange={(event) => setUrl(event.target.value)}
				/>
				<button onClick={generateCode}>Generate</button>
				{qrCode && (
					<>
						<img src={qrCode} alt="" />
						<a href={qrCode} download className="download">
							Download
						</a>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
