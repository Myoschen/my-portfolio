import IonIcon from '@reacticons/ionicons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-center my-6">
      <button
        className="mx-auto btn gap-x-2 btn-ghost"
        onClick={() => scrollToTop()}
      >
        <IonIcon name="arrow-up" size="large" />
        <span className="tracking-wide">Go to top</span>
      </button>
    </div>
  );
}
