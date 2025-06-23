import SoalSection from "@/components/Section/SoalSection";

const HaruSoal4 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/haru.png")}
      soal={require("@/assets/images/latihan/soal4-haru.png")}
      opsiA={require("@/assets/images/opsi/haru/opsi-4a.png")}
      opsiB={require("@/assets/images/opsi/haru/opsi-4b.png")}
      opsiC={require("@/assets/images/opsi/haru/opsi-4c.png")}
      opsiD={require("@/assets/images/opsi/haru/opsi-4d.png")}
      correctAnswer="A"
      weather="haru"
      type="type2"
      nomorSoal={4}
    />
  );
};

export default HaruSoal4;
