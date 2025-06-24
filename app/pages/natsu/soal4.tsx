import SoalSection from "@/components/Section/SoalSection";

const NatsuSoal4 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/natsu.png")}
      soal={require("@/assets/images/latihan/soal4-natsu.png")}
      opsiA={require("@/assets/images/opsi/natsu/opsi-4a.png")}
      opsiB={require("@/assets/images/opsi/natsu/opsi-4b.png")}
      opsiC={require("@/assets/images/opsi/natsu/opsi-4c.png")}
      opsiD={require("@/assets/images/opsi/natsu/opsi-4d.png")}
      correctAnswer="C"
      weather="natsu"
      type="type1"
      nomorSoal={4}
    />
  );
};

export default NatsuSoal4;
