export default function Ibirebwaniteka() {
    const Amategeko =[
        '1.	Abapolisi bo mu mutwe ushinzwe umutekano wo mu muhanda', `2.	Ba ofisiye na ba su zofisiye bo muri polisi y' igihugu igihe bari mu kazi,`,`4.	Abakozi bo mubiro by' imisoro`,`5.	Ba ofisiye bashinzwe polisi y' ingabo igihe bayobora abasirikari bagenda ku mirongo`,`6.	Abakozi bo mubiro bishinzwe amateme n' imihanda.`,`3. Abakozi ba gasutamo`,`7.	Abakozi bo mubiro bya minisiteri ishinzwe gutwara abantu n' ibintu mumirimo yayo babiherewe uburenganzira na ministeri y' ubutabera`,`8.	Ba kaporali n' abapolisi bo muri polisi y' igihugu igihe bari mukazi babitumwe na prokireri wa Repuburika wo muri iyo fasi.`
    ]
  return (
    <div>
      <div className="py-3 px-3 bg-[#F7F7F7] rounded-md relative w-full">
        <h1 className="text-center font-semibold py-4 font-family-playfair text-2xl">Ibirebwa n'iteka</h1>

        <p className="text-[13px] py-5 px-5 font-semibold  font-family-poppins ">Ingingo ya:2</p>
        <p className="text-[16px] text-gray-700 px-5 font-semibold  font-family-playfair ">Bitabujije ububasha abagenza - cyaha bahawe n' amategeko y' umwihariko, abashinzwe kubahiriza cyane iri teka ni </p>

        <div className="py-7 px-4 ">
            {
                Amategeko.map((rule)=>(
                    <h4 className="py-2 text-[16px] text-gray-700 ">{rule}</h4>
                ))
            }

        </div>
      </div>
    </div>
  );
}
