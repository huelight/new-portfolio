import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import i18n from 'i18next';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { initializeI18n } from "./utils/utils";


initializeI18n();

const App = () => {
  const { t } = useTranslation();

  const personalDetails = {
    name: "Daniel Aiyelu",
    let_me: t('about.let_me'),
    meme: t('about.meme'),
    greeting: t('about.greeting'),
    motto: t('about.motto'),
    btn_text: t('about.btn_text'),
    t_name: t('about.t_name'),
    t_location: t('about.t_location'),
    avail: t('about.avail'),
    location: t('about.current-location'),
    email: "aiyeludaniel@gmail.com",
    availability: t('about.my-availability'),
    brand:
      t('about.my-brand'),
  };


  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <AnimatedRoutes personalDetails={personalDetails} />
      </I18nextProvider>
    </>
  );
}

export default App;
