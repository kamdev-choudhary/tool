import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";

const Home = React.lazy(() => import("./pages/home/Home"));

// utilities
const Clock = React.lazy(() => import("./pages/utilities/clock/Clock"));
const Password = React.lazy(() =>
  import("./pages/utilities/password/PasswordGenerator")
);
const ColorPicker = React.lazy(() =>
  import("./pages/utilities/color/ColorPicker")
);
const Crypto = React.lazy(() => import("./pages/cryptography/CryptoJS"));
const QRCodeGenerator = React.lazy(() =>
  import("./pages/utilities/qr/QRCodeGenerator")
);
const Dictionary = React.lazy(() =>
  import("./pages/utilities/dictionary/Dictionary")
);

// Entertainments
const Jokes = React.lazy(() => import("./pages/entertainments/Jokes"));
const Sayari = React.lazy(() => import("./pages/entertainments/Sayari"));

// Image Tools
const ImageCompressor = React.lazy(() =>
  import("./pages/image/ImageCompressor")
);
const ImageConverter = React.lazy(() => import("./pages/image/ImageConverter"));

// PDF Tools
const PdfCompressor = React.lazy(() => import("./pages/pdfs/CompressPdf"));

// Developer
const Exceltojson = React.lazy(() => import("./pages/developers/Exceltojson"));
const Jsontoexcel = React.lazy(() => import("./pages/developers/Jsontoexcel"));
const FreeApi = React.lazy(() => import("./pages/developers/FreeApi"));

// Define routes
const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/clock" element={<Clock />} />
    <Route path="/password-generator" element={<Password />} />
    <Route path="/color-picker" element={<ColorPicker />} />
    <Route path="/crypto" element={<Crypto />} />
    <Route path="/jokes" element={<Jokes />} />
    <Route path="/sayari" element={<Sayari />} />
    <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
    <Route path="/dictionary" element={<Dictionary />} />
    <Route path="/image/compressor" element={<ImageCompressor />} />
    <Route path="/image/converter" element={<ImageConverter />} />
    <Route path="/pdf/compressor" element={<PdfCompressor />} />
    <Route path="/dev/excel-to-json" element={<Exceltojson />} />
    <Route path="/dev/json-to-excel" element={<Jsontoexcel />} />
    <Route path="/dev/free-api" element={<FreeApi />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default routes;
