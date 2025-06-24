import SoalSection from "@/components/Section/SoalSection";

const HaruSoal1 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/haru.png")}
      soal={require("@/assets/images/latihan/soal1-haru.png")}
      opsiA={require("@/assets/images/opsi/haru/opsi-1a.png")}
      opsiB={require("@/assets/images/opsi/haru/opsi-1b.png")}
      opsiC={require("@/assets/images/opsi/haru/opsi-1c.png")}
      opsiD={require("@/assets/images/opsi/haru/opsi-1d.png")}
      correctAnswer="A"
      weather="haru"
      type="type1"
      nomorSoal={1}
    />
  );
};

export default HaruSoal1;
