import SoalSection from "@/components/Section/SoalSection";

const FuyuSoal1 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/fuyu.png")}
      soal={require("@/assets/images/latihan/soal1-fuyu.png")}
      opsiA={require("@/assets/images/opsi/fuyu/opsi-1a.png")}
      opsiB={require("@/assets/images/opsi/fuyu/opsi-1b.png")}
      opsiC={require("@/assets/images/opsi/fuyu/opsi-1c.png")}
      opsiD={require("@/assets/images/opsi/fuyu/opsi-1d.png")}
      correctAnswer="A"
      weather="fuyu"
      type="type2"
      nomorSoal={1}
    />
  );
};

export default FuyuSoal1;
