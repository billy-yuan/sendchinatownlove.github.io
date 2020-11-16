import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';
import { getCampaigns } from '../../../utilities/api';
import lanternHeroTop from '../images/skyline-hero.png'; // replace with  actual image
import { useTranslation } from 'react-i18next';
import MegaGAMDonationBar from './MegaGAMDonationBar';
import MegaGAMCampaignCard from './MegaGAMCampaignCard';

// Dummy campaign info for testing. DELETE BEFORE PUSHING TO PROD
const dummyCampaign = {
  id: '1',
  active: true,
  valid: true,
  description: 'Description',
  seller_id: 'seller_id',
  distributor_id: 'distributor_id',
  nonprofit_id: 'nonprofit_id',
  location_id: 'location_id',
  end_date: '2020-12-31',
  created_at: '2020-11-01',
  updated_at: '2020-11-15',
  // gallery_image_urls: string[];
  target_amount: 10000,
  price_per_meal: 100,
  amount_raised: 1000,
  last_contribution: '2020-11-05',
};

const dummyMealsRaised = 50; //
const dummyTargetMeals = 120;

const dummyText = {
  campaignInfo:
    'Mega GAM Proceeds text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel nisl tincidunt, sollicitudin magna id, auctor sapien. Fusce vel tortor vehicula, dictum tortor ornare, finibus mauris. Mauris congue arcu nulla, id cursus elit varius rhoncus. Vivamus porta scelerisque dui ut malesuada. Morbi blandit maximus nisl sed faucibus. Nunc lobortis est urna, at sagittis enim condimentum eu. Ut scelerisque, orci quis ullamcorper eleifend, nulla elit egestas arcu',
};

// Production code below
const GiftButton = () => {
  // BY: Update so button opens payment modal
  const { t } = useTranslation();
  return (
    <Button
      className="button--filled"
      onClick={(e) => {
        e.preventDefault();
        window.open('https://www.gofundme.com/f/gift-a-meal', '_blank');
      }}
    >
      {t('gamHome.giftButton')}
    </Button>
  );
};

const DonationBar = () => {
  return (
    // BY: Props of MegaGAMDonationBar are megaGAM campaign level details: active, number of meals, target meals, last contribution time, campaign end
    <MegaGAMDonationBar
      isActive={dummyCampaign.active}
      numContributions={dummyMealsRaised}
      targetAmount={dummyTargetMeals}
      progressBarColor={'#CF6E8A'}
      lastContributionTime={new Date(dummyCampaign.last_contribution)}
      endDate={new Date(dummyCampaign.end_date)}
    />
  );
};

// BY: Final component to be exported MegaGAMHighlightbox
// BY: needs contribution amount, seller ID, campaign name (e.g. Apex x Shunfa) as props
const MegaGAMHighlightBox = (megaGAMCampaign) => {
  return (
    <Container>
      <Hero height={304} src={lanternHeroTop} alt="lantern overlay" />
      <InnerContainer>
        <HeaderText>Mega-GAM</HeaderText>
        <SubHeaderText>Campaign Name</SubHeaderText>
        <br />
        <p>{dummyText.campaignInfo}</p>

        <p>
          <b>Total Raised: {'$' + dummyCampaign.amount_raised}</b>
        </p>
        {/* <div style={{ display: 'inline' }}> */}
        <div>
          <DonationBar />
          <ButtonWrapper>
            <GiftButton />
          </ButtonWrapper>
        </div>
        <br />
        <br />
        <br />
        <br />
        <p>Learn more about our participating merchants:</p>

        <CampaignContainer>
          {megaGAMCampaign.megaGAMCampaign.map((campaignInfo) => (
            <MegaGAMCampaignCard storeInfo={campaignInfo} />
          ))}
        </CampaignContainer>

        <hr style={{ marginTop: '50px', marginBottom: '50px' }}></hr>

        <Footer>
          <span
            style={{
              marginRight: '30px',
              display: 'inline-block',
            }}
          >
            Apex for Youth:
          </span>
          <VerticalBlock> </VerticalBlock>
          <span
            style={{
              margin: '30px',
              width: '60%',
              display: 'inline-block',
              wordWrap: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            Donations for this campaign are in partnership with APEX for Youth,
            a non-profit organization under IRS code 501(c)(3). Your donation
            will be tax deductible to the extent allowable by law. [COPY TO BE
            UPDATED]{' '}
          </span>
        </Footer>
      </InnerContainer>
    </Container>
  );
};

export default MegaGAMHighlightBox;

// Add this to Button
// @media (${smallScreens}) {
//   font-size: 14px;
//   padding-right: 0;
// }
const Button = styled.button`
  text-align: center;
  letter-spacing: 0.15em;
  cursor: pointer;
  margin-bottom: 18px;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.05em;
  width: 360px;
  height: 57px;
  margin-left: 60px;
  margin-bottom: 0;
`;

const ButtonWrapper = styled.div`
  display: inline;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 112px;
`;

const Container = styled.div`
  background: #f7f7f7;
  align-items: center;
  padding-bottom: 100px;
`;

const CampaignContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: center;
  grid-gap: 1.5rem 0rem;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Footer = styled.div`
  width: 100%;
  height: 100px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
`;
const HeaderText = styled.p`
  color: #1e7c9a;
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 600;
`;

//height: ${(props) => props.height}px;
const Hero = styled.img`
  height: 10vw;
  width: 100%;
  object-fit: cover;
  padding-bottom: 1vw;
`;

const InnerContainer = styled.div`
  margin-left: 60px;
  margin-right: 60px;
`;
const SubHeaderText = styled.p`
  color: #000000;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: 600;
`;

const VerticalBlock = styled.span`
  background-color: #ee4037;
  height: 100%;
  width: 10px;
  display: inline-block;
`;
