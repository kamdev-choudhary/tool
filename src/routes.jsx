import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import Loader from "./components/Loader";

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
const Movies = React.lazy(() => import("./pages/entertainments/Movies"));

// Image Tools
const ImageCompressor = React.lazy(() =>
  import("./pages/image/ImageCompressor")
);
const ImageConverter = React.lazy(() => import("./pages/image/ImageConverter"));

// PDF Tools
const PdfCompressor = React.lazy(() => import("./pages/pdfs/CompressPdf"));

// Developer
const Exceltojson = React.lazy(() => import("./pages/developers/ExcelToJson"));
const Jsontoexcel = React.lazy(() => import("./pages/developers/JsonToExcel"));
const FreeApi = React.lazy(() => import("./pages/developers/FreeApi"));

// Education
const JEEMainRankCalculator = React.lazy(() =>
  import("./pages/education/JEEMainRankCalculator")
);
const JEEMainClosingRank = React.lazy(() =>
  import("./pages/education/JEEMainClosingRank")
);
const JEEAdvORCR = React.lazy(() => import("./pages/education/JEEAdvORCR"));

// Define routes
const routes = (
  <Routes>
    <Route path="/" element={<Home />} />

    {/* Utilities */}
    <Route path="/clock" element={<Clock />} />
    <Route path="/password-generator" element={<Password />} />
    <Route path="/color-picker" element={<ColorPicker />} />
    <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
    <Route path="/dictionary" element={<Dictionary />} />

    {/* Crypography */}
    <Route path="/crypto" element={<Crypto />} />

    {/* Entertainments */}
    <Route path="/jokes" element={<Jokes />} />
    <Route path="/sayari" element={<Sayari />} />
    <Route path="/movies" element={<Movies />} />

    {/* Images tools */}
    <Route path="/image/compressor" element={<ImageCompressor />} />
    <Route path="/image/converter" element={<ImageConverter />} />

    {/* Pdfs tools */}
    <Route path="/pdf/compressor" element={<PdfCompressor />} />

    {/* Developers tools */}
    <Route path="/dev/excel-to-json" element={<Exceltojson />} />
    <Route path="/dev/json-to-excel" element={<Jsontoexcel />} />
    <Route path="/dev/free-api" element={<FreeApi />} />

    {/* Educational Tools */}
    <Route
      path="/edu/jeemain/rank-prediction"
      element={<JEEMainRankCalculator />}
    />
    <Route path="/edu/jeemain/closing-rank" element={<JEEMainClosingRank />} />
    <Route path="/edu/jeeadv/closing-rank" element={<JEEAdvORCR />} />

    {/* Default Route */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default routes;
