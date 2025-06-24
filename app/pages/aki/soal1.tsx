import SoalSection from "@/components/Section/SoalSection";

const AkiSoal1 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/aki.png")}
      soal={require("@/assets/images/latihan/soal1-aki.png")}
      opsiA={require("@/assets/images/opsi/aki/opsi-1a.png")}
      opsiB={require("@/assets/images/opsi/aki/opsi-1b.png")}
      opsiC={require("@/assets/images/opsi/aki/opsi-1c.png")}
      opsiD={require("@/assets/images/opsi/aki/opsi-1d.png")}
      correctAnswer="B"
      weather="aki"
      type="type2"
      nomorSoal={1}
    />
  );
};

export default AkiSoal1;
