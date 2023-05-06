import { useEffect, useRef, useState } from "react";

let tvScriptLoadingPromise: Promise<any>;

const TestWidget = () => {
  const onLoadScriptRef = useRef<(() => void) | null>();

  const [tradeType, setTradeType] = useState("FX:EURUSD");

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    function createWidget() {
      if (
        document.getElementById("tradingview_78b4f") &&
        "TradingView" in window
      ) {
        const tradingViewWindow: unknown = window.TradingView;

        new (tradingViewWindow as any).widget({
          autosize: true,
          symbol: tradeType,
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          withdateranges: true,
          range: "YTD",
          hide_side_toolbar: false,
          allow_symbol_change: true,
          details: true,
          hotlist: true,
          calendar: true,
          container_id: "tradingview_78b4f",
        });
      }
    }
  }, [tradeType]);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_78b4f" style={{ height: "100vh" }} />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/EURUSD/?exchange=FX"
          rel="noopener"
          target="_blank"
        >
          <span className="blue-text">EUR USD chart</span>
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
};

export default TestWidget;
