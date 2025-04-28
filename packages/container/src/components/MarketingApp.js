import React from "react";
import mount from "marketing/MarketingApp";
import { useRef, useEffect } from "react";
const Marketing = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};
export default Marketing;
