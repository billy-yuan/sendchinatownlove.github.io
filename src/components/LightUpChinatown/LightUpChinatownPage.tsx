import React from 'react';
import styled from 'styled-components';
import lanternHeader from './images/lantern-header.png';
import lanternFooter from './images/lantern-footer.png';
import mapImg from './images/map.png';
import tier1Logo from './images/tier1-logo.png';
import tier2Logo from './images/tier2-logo.png';
import tier3Logo from './images/tier3-logo.png';
import DonationTierItem from './DonationTierItem';
import { useTranslation } from 'react-i18next';

const LightUpChinatownPage = () => {
  const { t } = useTranslation();
  const today = new Date();
  const campaignEndDate = new Date('11/30/2020');
  const timeUntilEnd = campaignEndDate.getTime() - today.getTime();
  const daysUntilEnd = Math.ceil(timeUntilEnd / (1000 * 3600 * 24));

  return (
    <React.Fragment>
      <Banner>
        <Hero height={304} src={lanternHeader} alt="lantern overlay" />
        <HeaderText>{t('lightUpChinatown.headerText')}</HeaderText>
        <HeaderSubtext>{t('lightUpChinatown.headerSubtext')}</HeaderSubtext>
      </Banner>
      <Container>
        <TextContainer>
          <SummaryHeader>{t('lightUpChinatown.summaryHeader')}</SummaryHeader>
          <SummaryBody>{t('lightUpChinatown.summaryBody1')}</SummaryBody>
          <br></br>
          <SummaryBody>{t('lightUpChinatown.summaryBody2')}</SummaryBody>
          <br></br>
          <SummaryBody>
            <p>{t('lightUpChinatown.phase1')}</p>
            <p>{t('lightUpChinatown.phase2')}</p>
            <p>{t('lightUpChinatown.phase3')}</p>
          </SummaryBody>
          <br></br>
          <SummaryBody>{t('lightUpChinatown.summaryBody3')}</SummaryBody>
          <br></br>
          <SummaryBody>{t('lightUpChinatown.summaryBody4')}</SummaryBody>
        </TextContainer>
        <MapContainer>
          <Map src={mapImg} /> {/* TODO: Replace with GIF */}
          <CampaignInfoText color={'#1E1E1E'}>
            {t('lightUpChinatown.campaignHeader')}
          </CampaignInfoText>
          <CampaignInfoText color={'#1E1E1E'}>
            {t('lightUpChinatown.campaignDates')}
          </CampaignInfoText>
          <CampaignInfoText color={'#CF6E8A'}>
            {daysUntilEnd} {t('lightUpChinatown.campaignDaysLeft')}
          </CampaignInfoText>
        </MapContainer>
      </Container>
      <DonationTierContainer>
        <DonationTiersText>
          {t('lightUpChinatown.donationTierText')}
        </DonationTiersText>
        <DonationTierItem
          imageUrl={tier1Logo}
          ctaText={t('lightUpChinatown.tier1.cta')}
          titleText={t('lightUpChinatown.tier1.title')}
          descriptionItems={[t('lightUpChinatown.tier1.description1')]}
          buttonText={t('lightUpChinatown.tier1.buttonText')}
          currentDonationCount={10}
          maxDonationCount={0}
        />
        <DonationTierItem
          imageUrl={tier2Logo}
          ctaText={t('lightUpChinatown.tier2.cta')}
          titleText={t('lightUpChinatown.tier2.title')}
          descriptionItems={[
            t('lightUpChinatown.tier2.description1'),
            t('lightUpChinatown.tier2.description2'),
            t('lightUpChinatown.tier2.description3'),
          ]}
          buttonText={t('lightUpChinatown.tier2.buttonText')}
          currentDonationCount={10}
          maxDonationCount={100}
        />
        <DonationTierItem
          imageUrl={tier3Logo}
          ctaText={t('lightUpChinatown.tier3.cta')}
          titleText={t('lightUpChinatown.tier3.title')}
          descriptionItems={[
            t('lightUpChinatown.tier3.description1'),
            t('lightUpChinatown.tier3.description2'),
            t('lightUpChinatown.tier3.description3'),
            t('lightUpChinatown.tier3.description4'),
          ]}
          buttonText={t('lightUpChinatown.tier3.buttonText')}
          currentDonationCount={30}
          maxDonationCount={200}
        />
      </DonationTierContainer>
      <Banner>
        <Hero height={395} src={lanternFooter} alt="lantern overlay" />
      </Banner>
    </React.Fragment>
  );
};

const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 25px;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    display: grid;
    grid-column-gap: 116px;
  }
`;

const TextContainer = styled.section`
  align-items: start;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 599px) {
    padding: 35px 0px;
  }
`;

const Hero = styled.img`
  height: ${(props) => props.height}px;
  width: 100vw;
`;

const Banner = styled.div`
  position: relative;
  text-align: center;
`;

const HeaderText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: #ffffff;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  @media (max-width: 599px) {
    top: 30%;
  }
`;

const HeaderSubtext = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  @media (max-width: 599px) {
    top: 65%;
  }
`;

const DonationTiersText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #000000;
  padding-bottom: 15px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 15px;
`;

const SummaryHeader = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: ##1e1e1e;
  margin-bottom: 40px;
`;

const SummaryBody = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-size: 18px;
  line-height: 20px;
  color: ##1e1e1e;
`;

const MapContainer = styled.section`
  position: relative;
  order: 1;
  grid-row: 1;
  padding: 70px 0px;
  text-align: center;
  @media (min-width: 900px) {
    position: sticky;
    top: 20px;
    order: 2;
    grid-column: 2;
  }
  @media (max-width: 599px) {
    padding: 35px 0px;
  }
`;

const Map = styled.img`
  height: 515px;
  width: 388px;
  margin-bottom: 20px;
`;

const CampaignInfoText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 35px;
  color: ${(props) => props.color};
`;

const DonationTierContainer = styled.section`
  max-width: 1440px;
  margin: 35px auto;
  align-items: center;
  @media (max-width: 599px) {
    padding: 0px 17px;
  }
`;

export default LightUpChinatownPage;
