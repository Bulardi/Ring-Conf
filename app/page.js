import Script from "next/script";

export default function Page() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Ring-Conf";

  const configScript = `
    var options = {
      distID: "latest",
      solution3DName: "ring-configurator-milos",
      projectName: "poc",
      solution3DID: "49040",
      containerID: "container3d",
      onLoadingChanged: function (o) {
        if (typeof loadingBar !== "undefined") {
          loadingBar.style.width = o.progress + "%";
        }
      }
    };

    function engraving(value) {
      Unlimited3D.updateOverlay(
        { overlay: "ring_0012", overlayEntry: "letters", options: { text: value } },
        function (e, r) { console.log(e, r); }
      );
    }

    function changeText(fontUrl) {
      Unlimited3D.updateOverlay(
        { overlay: "ring_0012", overlayEntry: "letters", options: { fontUrl: fontUrl } },
        function (e, r) { console.log(e, r); }
      );
    }

    function changeColor1() { Unlimited3D.changeMaterialColor({ material: "diamond-01", color: "#ffffff" }); }
    function changeColor2() { Unlimited3D.changeMaterialColor({ material: "diamond-01", color: "#ff272a" }); }
    function changeColor3() { Unlimited3D.changeMaterialColor({ material: "diamond-01", color: "#007228" }); }
    function changeColor4() { Unlimited3D.changeMaterialColor({ material: "white_gold_01", color: "#f0f0f0" }); }
    function changeColor5() { Unlimited3D.changeMaterialColor({ material: "white_gold_01", color: "#d9a569" }); }
    function changeColor6() { Unlimited3D.changeMaterialColor({ material: "white_gold_01", color: "#fdd0c5" }); }

    window.engraving = engraving;
    window.changeText = changeText;
    window.changeColor1 = changeColor1;
    window.changeColor2 = changeColor2;
    window.changeColor3 = changeColor3;
    window.changeColor4 = changeColor4;
    window.changeColor5 = changeColor5;
    window.changeColor6 = changeColor6;

    Unlimited3D.init(options, {}, function () {
      if (typeof loadingContent !== "undefined") {
        loadingContent.style.display = "none";
      }
    });
  `;

  return (
    <>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root" />

      <Script
        src="https://distcdn.unlimited3d.com/pres/v/2.3.3/unlimited3d.min.js"
        strategy="afterInteractive"
      />
      <Script id="u3d-init" strategy="afterInteractive">
        {configScript}
      </Script>
      <Script
        src={`${basePath}/static/js/main.a6e16446.js`}
        strategy="afterInteractive"
      />
    </>
  );
}
