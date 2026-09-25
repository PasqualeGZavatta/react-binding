// import ButtonChangeLanguage from "../ui/ButtonChangeLanguage";
// import ButtonChangeStyle from "../ui/ButtonChangeStyle";
// import Counter from "../ui/Counter";
// import Lista from "../ui/Lista";
// import TextAlign from "../ui/TextAlign";

import ContatoreCaratteri from "../ui/ContatoreCaratteri";
import FiltraNomi from "../ui/secondaEs/FiltraNomi";
import SostituzioneTesto from "../ui/secondaEs/SostituzioneTesto";

export default function MainContent() {
  return (
    <>
      {/** Esrcitazione n1*/}
      {/* <Counter />
            <hr />
            <ButtonChangeStyle />
            <hr />
            <TextAlign />
            <hr />
            <ButtonChangeLanguage />
            <hr />
            <Lista /> */}

      {/** Esrcitazione n2*/}
      <h2>Es1</h2>
      <ContatoreCaratteri />

      <h2>Es2</h2>
      <FiltraNomi />

      <h2>Es3</h2>
      <SostituzioneTesto />
    </>
  );
}
