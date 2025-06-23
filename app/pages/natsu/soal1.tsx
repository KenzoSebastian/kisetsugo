import SoalSection from "@/components/Section/SoalSection";

const NatsuSoal1 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/natsu.png")}
      soal={require("@/assets/images/latihan/soal1-natsu.png")}
      opsiA={require("@/assets/images/opsi/natsu/opsi-1a.png")}
      opsiB={require("@/assets/images/opsi/natsu/opsi-1b.png")}
      opsiC={require("@/assets/images/opsi/natsu/opsi-1c.png")}
      opsiD={require("@/assets/images/opsi/natsu/opsi-1d.png")}
      correctAnswer="B"
      weather="natsu"
      type="type2"
      nomorSoal={1}
    />
  );
};

export default NatsuSoal1;
