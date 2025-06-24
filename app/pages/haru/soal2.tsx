import SoalSection from "@/components/Section/SoalSection";

const HaruSoal2 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/haru.png")}
      soal={require("@/assets/images/latihan/soal2-haru.png")}
      opsiA={require("@/assets/images/opsi/haru/opsi-1a.png")}
      opsiB={require("@/assets/images/opsi/haru/opsi-2b.png")}
      opsiC={require("@/assets/images/opsi/haru/opsi-2c.png")}
      opsiD={require("@/assets/images/opsi/haru/opsi-1d.png")}
      correctAnswer="C"
      weather="haru"
      type="type1"
      nomorSoal={2}
    />
  );
};

export default HaruSoal2;
