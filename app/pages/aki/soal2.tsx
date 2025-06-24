import SoalSection from "@/components/Section/SoalSection";

const AkiSoal2 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/aki.png")}
      soal={require("@/assets/images/latihan/soal2-aki.png")}
      opsiA={require("@/assets/images/opsi/aki/opsi-2a.png")}
      opsiB={require("@/assets/images/opsi/aki/opsi-2b.png")}
      opsiC={require("@/assets/images/opsi/aki/opsi-2c.png")}
      opsiD={require("@/assets/images/opsi/aki/opsi-2d.png")}
      correctAnswer="C"
      weather="aki"
      type="type2"
      nomorSoal={2}
    />
  );
};

export default AkiSoal2;
