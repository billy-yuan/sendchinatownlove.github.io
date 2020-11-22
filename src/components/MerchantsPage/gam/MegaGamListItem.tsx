import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import {
  ModalPaymentConstants,
  useModalPaymentDispatch,
  ModalPaymentTypes,
} from '../../../utilities/hooks/ModalPaymentContext';
import Modal from '../../ModalPayment';

import { Campaign } from '../../../utilities/api/types';
import { tabletScreens } from '../../../utilities/general/responsive';

interface Props {
  campaign: Campaign;
}

const MegaGamModal: any = Modal; // todo: add type

const MegaGamListItem = ({ campaign }: Props) => {
  const dispatch = useModalPaymentDispatch(null);

  const showModal = (event: any) => {
    dispatch({
      type: ModalPaymentConstants.SET_MODAL_VIEW,
      payload: ModalPaymentTypes.modalPages.mega_gam,
    });
  };

  const { t } = useTranslation();
  return (
    <Container>
      <HeroImage heroImageUrl={campaign.gallery_image_urls[0]} />
      <Content>
        {/* TODO: Figure out if this is the correct header. If so, we need to translate. */}
        <Header>Mega-GAM</Header>
        {/* TODO: Don't hard code this. Figure out where we should get this data from. */}
        <Subheader>December Campaign</Subheader>
        <Description>{campaign.description}</Description>
        <DonationContainer>
          {/* TODO: Add donation data UI. */}
          <DonationContent>_DONATION_DATA_</DonationContent>
          {campaign.active && (
            // TODO: Open payment modal.
            <>
              <MegaGamModal></MegaGamModal>
              <Button className="button--filled" onClick={showModal}>
                {t('gamHome.megaGamListItem.giftButton')}
              </Button>
            </>
          )}
        </DonationContainer>
        <SellerDistributorContent>
          {/* TODO: Translate. */}
          <LearnMoreText>
            Learn more about our participating merchants:
          </LearnMoreText>
          {/* TODO: Add seller/distributor pairs. */}
          <SellerDistributorPairs>
            _SELLER_DISTRIBUTOR_PAIRS_
          </SellerDistributorPairs>
        </SellerDistributorContent>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
`;

// TODO: Figure out how this image should scale.
const HeroImage = styled.div`
  background-image: url('${(props: { heroImageUrl: string }) =>
    props.heroImageUrl}');
  background-size: cover;
  height: 252px;
  width: 100%;

  @media (${tabletScreens}) {
    height: 106px;
  }
`;

const Content = styled.div`
  padding: 44px 66px;

  @media (${tabletScreens}) {
    padding: 16px 36px;
  }
`;

const Header = styled.div`
  color: #1e7c9a;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 16px;

  @media (${tabletScreens}) {
    margin-bottom: 8px;
  }
`;

const Subheader = styled.div`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 36px;

  @media (${tabletScreens}) {
    margin-bottom: 16px;
  }
`;

const Description = styled.div`
  margin-bottom: 24px;
`;

const DonationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (${tabletScreens}) {
    flex-direction: column;
  }
`;

const DonationContent = styled.div`
  @media (${tabletScreens}) {
    margin-bottom: 28px;
  }
`;

const Button = styled.div`
  text-align: center;
  width: 240px;
  letter-spacing: 0.15em;
  cursor: pointer;
  margin-bottom: 18px;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.05em;

  @media (${tabletScreens}) {
    font-size: 14px;
    margin-bottom: 16px;
    width: 100%;
  }
`;

const SellerDistributorContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const LearnMoreText = styled.div`
  margin-bottom: 36px;
`;

const SellerDistributorPairs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MegaGamListItem;
