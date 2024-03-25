import { stats } from "../constants/constants"

const Stats = () => (
    <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
        {stats.map((stat, index) => (
            <div key={stat.id} className={`justify-start items-center flex-column ${stats.length === (index + 1) ? 'mr-0' : 'mr-7'} mt-5`}>
                <h4 className="font-sans font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-dimWhite">
                    {stat.value}
                </h4>
                <p className="font-sans font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-dimWhite text-center">
                    {stat.title}
                </p>
            </div>
        ))}
    </section>
)

export default Stats
