import SoalSection from "@/components/Section/SoalSection";

const HaruSoal3 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/haru.png")}
      soal={require("@/assets/images/latihan/soal3-haru.png")}
      opsiA={require("@/assets/images/opsi/haru/opsi-3a.png")}
      opsiB={require("@/assets/images/opsi/haru/opsi-3b.png")}
      opsiC={require("@/assets/images/opsi/haru/opsi-3c.png")}
      opsiD={require("@/assets/images/opsi/haru/opsi-3d.png")}
      correctAnswer="B"
      weather="haru"
      type="type2"
      nomorSoal={3}
    />
  );
};

export default HaruSoal3;
