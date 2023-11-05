import React from "react";
import "./ipInfo.css";

//context
import { useIp } from "../../Context/IpContext";

function IpInfo() {
  const { geoData } = useIp();

  return (
    <div className="ipInfo">
      {geoData && (
        <div className="wrapper whiteBg">
          <div className="ipInfoItem">
            <h3 className="ipInfoItemTitle headingXS">IP Address</h3>
            <p className="ipInfoItemValue headingM">{geoData.ip}</p>
          </div>
          <hr className="ipInfoSep" />
          <div className="ipInfoItem">
            <h3 className="ipInfoItemTitle headingXS">Location</h3>
            <p className="ipInfoItemValue headingM">
              {geoData.location.city}, {geoData.location.region} 
              {geoData.location.postalCode}
            </p>
          </div>
          <hr className="ipInfoSep" />
          <div className="ipInfoItem">
            <h3 className="ipInfoItemTitle headingXS">Timezone</h3>
            <p className="ipInfoItemValue headingM">
              UTC {geoData.location.timezone}
            </p>
          </div>
          <hr className="ipInfoSep" />
          <div className="ipInfoItem">
            <h3 className="ipInfoItemTitle headingXS">ISP</h3>
            <p className="ipInfoItemValue headingS">{geoData.isp}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default IpInfo;
