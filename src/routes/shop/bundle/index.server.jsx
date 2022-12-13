import {Suspense} from 'react';
import {CacheNone, Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {Section} from '~/components';
import {Step1} from '~/components/shopping/Step1';
import {Step2} from '~/components/shopping/Step2';
import {Step3} from '~/components/shopping/Step3';
import axios from 'axios';
const Index = ({response}) => {
  response.cache(CacheNone());
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox Bundle'}} />
      </Suspense>
      <Section>
        <Step1 />
        <Step2 />
        <Step3 />
      </Section>
    </Layout>
  );
};
export default Index;
