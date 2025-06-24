import SoalSection from "@/components/Section/SoalSection";

const FuyuSoal2 = () => {
  return (
    <SoalSection
      bgImage={require("@/assets/images/background/fuyu.png")}
      soal={require("@/assets/images/latihan/soal2-fuyu.png")}
      opsiA={require("@/assets/images/opsi/fuyu/opsi-2a.png")}
      opsiB={require("@/assets/images/opsi/fuyu/opsi-2b.png")}
      opsiC={require("@/assets/images/opsi/fuyu/opsi-2c.png")}
      opsiD={require("@/assets/images/opsi/fuyu/opsi-2d.png")}
      correctAnswer="C"
      weather="fuyu"
      type="type2"
      nomorSoal={2}
    />
  );
};

export default FuyuSoal2;
