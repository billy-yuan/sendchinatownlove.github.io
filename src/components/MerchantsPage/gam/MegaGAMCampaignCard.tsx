import * as React from 'react';
import { Link } from 'react-router-dom';
import { BrowsePageSeller } from '../../../utilities/api';
import styled from 'styled-components';
import { smallScreens } from '../../../utilities/general/responsive';

// export interface Props {
//   // BY: update this to be megaGAMInfo : MegaGamCampaign
//   storeInfo?: BrowsePageSeller;
// }

// const MegaGAMCampaignCard = ({ storeInfo }: Props) => {
const MegaGAMCampaignCard = (storeInfo) => {
  let city = '';
  let state = '';

  // if (storeInfo!.locations && storeInfo!.locations[0]) {
  //   city = storeInfo!.locations[0].city;
  //   state = storeInfo!.locations[0].state;
  // }
  return (
    <React.Fragment>
      <Link
        //to={`/${storeInfo!.seller_id}`}
        to="/" //BY: update this
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <MerchantCard>
          {/* BY: Add in data for the campaign cards */}
          <Logo src={storeInfo.storeInfo.hero_image_url} alt="Logo" />
          <CampaignName>
            <span
              style={{
                alignItems: 'center',
                display: 'inline-flex',
                minHeight: '40px',
                width: '70%',
              }}
            >
              {storeInfo.storeInfo.description}
            </span>
            <span
              style={{
                alignItems: 'center',
                display: 'inline-flex',
                minHeight: '40px',
                width: '20%',
              }}
            >
              Image
            </span>
          </CampaignName>
          {/* <Location>
            {city}, {state}
          </Location> */}
          {/* <StoreName>{storeInfo!.name}</StoreName>
          <Summary>{storeInfo!.summary || storeInfo!.story}</Summary> */}
          {/* BY: need to update "donation" phrase and the time stamp */}
          {/* <div style={{ color: '#949494' }}>
            Last donation 1h ago
          </div> */}
          <br />
        </MerchantCard>
      </Link>
    </React.Fragment>
  );
};

export default MegaGAMCampaignCard;

const Summary = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 61px;
`;

export const MerchantCard = styled.div`
  height: 190px;
  width: 270px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  padding: 0px;
  font-size: 14px;
  background-color: white;
  &.descriptionBox {
    width: 430px;
    height: 475px;
    text-align: center;
    margin: 0 auto;
    }
  @media (${smallScreens}) {
    margin: 30px;
    width: 85vw;
    &.descriptionBox {
      width: 85vw;
       height: auto;
  } 
`;
// white-space: nowrap;
const CampaignName = styled.div`
  word-wrap: break-word;
  font-size: 13px;
  color: #1e1e1e;
  vertical-align: middle;
  width: 100%;
  margin: 8px;
`;

const Logo = styled.img`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
`;
// border: 1px solid #e5e5e5;
// border-radius: 15px;
