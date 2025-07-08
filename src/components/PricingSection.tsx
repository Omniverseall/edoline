import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useInView } from '../hooks/useInView';

interface Tariff {
  nameKey: TranslationKey;
  usersKey: TranslationKey;
  priceKey: TranslationKey;
  features: TranslationKey[];
}

const tariffs: Tariff[] = [
  {
    nameKey: 'tariffStart',
    usersKey: 'tariffUsers5',
    priceKey: 'tariffPriceStart',
    features: ['pricingFeatureUsers5', 'pricingFeatureBasic', 'pricingFeatureEmailSupport'],
  },
  {
    nameKey: 'tariffTeam',
    usersKey: 'tariffUsers20',
    priceKey: 'tariffPriceTeam',
    features: ['pricingFeatureUsers20', 'pricingFeatureAdvanced', 'pricingFeaturePrioritySupport', 'pricingFeatureCustom'],
  },
  {
    nameKey: 'tariffPro',
    usersKey: 'tariffUsers50',
    priceKey: 'tariffPricePro',
    features: ['pricingFeatureUsers50', 'pricingFeatureAll', 'pricingFeature247Support'],
  },
  {
    nameKey: 'tariffEnterprise',
    usersKey: 'tariffUsers100',
    priceKey: 'tariffPriceEnterprise',
    features: ['pricingFeatureUsers100', 'pricingFeatureAll', 'pricingFeaturePersonalManager'],
  },
  {
    nameKey: 'tariffCorporate',
    usersKey: 'tariffUsers100plus',
    priceKey: 'tariffPriceCorporate',
    features: ['pricingFeatureUsers100plus', 'pricingFeatureCustom', 'pricingFeatureVipSupport', 'pricingFeatureAll'],
  },
];

interface PricingSectionProps {
  onOrderClick?: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onOrderClick }) => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05, once: true });

  return (
    <section id="pricing-section" ref={sectionRef} className="section relative overflow-hidden py-12 sm:py-16">
      <div className="container">
        <div className={`glass rounded-xl sm:rounded-2xl p-6 sm:p-8 ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `0.1s` }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-themed-foreground">{t('pricingTitle')}</h2>
          <p className="text-themed-muted text-center mb-10">{t('pricingSubtitle')}</p>
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper pb-10"
          >
            {tariffs.map((tariff) => (
              <SwiperSlide key={tariff.nameKey} className="h-auto">
                <div className="h-full tariff-card bg-white dark:bg-themed-surface rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full max-w-[350px] mx-auto">
                  <div className="text-lg font-semibold text-blue-600 mb-2">{t(tariff.nameKey)}</div>
                  <div className="text-3xl font-bold mb-2 text-themed-foreground">{t(tariff.priceKey)}</div>
                  <div className="text-themed-muted mb-4">{t(tariff.usersKey)} {t('activeUsers')}</div>
                  <ul className="flex-grow mb-6 space-y-2 text-themed-muted text-sm">
                    {tariff.features.map((featureKey, i) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <span className="text-blue-500">✓</span>
                        <span>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full btn btn-primary transition-all duration-300 mt-auto"
                    onClick={onOrderClick}
                  >
                    {t('pricingOrderBtn')}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;