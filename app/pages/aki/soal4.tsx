import SoalSection from "@/components/Section/SoalSection";

const AkiSoal4 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/aki.png")}
      soal={require("@/assets/images/latihan/soal4-aki.png")}
      opsiA={require("@/assets/images/opsi/aki/opsi-4a.png")}
      opsiB={require("@/assets/images/opsi/aki/opsi-4b.png")}
      opsiC={require("@/assets/images/opsi/aki/opsi-4c.png")}
      opsiD={require("@/assets/images/opsi/aki/opsi-4d.png")}
      correctAnswer="C"
      weather="aki"
      type="type1"
      nomorSoal={4}
    />
  );
};

export default AkiSoal4;
