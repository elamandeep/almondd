import { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();
const Form = () => {
    const [selectedOption, setSelectedOption] = useState<any>();
    const [selectCompany, setSelectCompany] = useState<any>()
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
        budget: 10000,

    })

    const domainOptions = [
        { value: 'technology', label: 'Technology' },
        { value: 'finance', label: 'Finance' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'education', label: 'Education' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'sports', label: 'Sports' },
    ]


    const servicesOptions = [
        { value: 'web design', label: 'Web Design' },
        { value: 'web development', label: 'Web Development' },
        { value: 'seo', label: 'SEO' },
        { value: 'content marketing', label: 'Content Marketing' },
        { value: 'graphic design', label: 'Graphic Design' },
        { value: 'digital marketing', label: 'Digital Marketing' },
        { value: 'social media', label: 'Social Media' },

    ]


    const { budget, name, email, message } = data

    function handleSubmit(event: any): void {
        console.log(data)
    }

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }



    return (
        <div className="form" >

            <div className='form-header' >
                <h1 className='f-gt' > Ready to
                    <span className='f-pl'>
                        connect?
                    </span>
                    <br />
                    We&apos;d love to
                    <span>
                        work
                    </span>
                    <br />
                    with you </h1>

            </div>


            <div className="form-content">
                <label htmlFor="company">
                    <span>Name of your company:</span>
                    <input id="company" name="name" type="text" value={name} onChange={handleChange} />
                </label>

                <label  htmlFor="email">
                    <span>Email:</span>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </label>


                <label htmlFor="domain">
                    <span>Company Domain:</span>
                    <Select
                        options={domainOptions}
                        unstyled
                        classNames={{
                            input: () => "select-input",
                            control: () => "select-control",
                            menu: () => "select-menu",
                            option: () => "select-option"
                        }}
                        value={selectCompany}
                        onChange={(data) => setSelectCompany(data)}
                        isSearchable={true}
                    />

                </label>

                <label htmlFor="">
                    <span>Services your are looking for*</span>
                    <Select
                        unstyled
                        classNames={{
                            input: () => "select-input",
                            control: () => "select-control",
                            menu: () => "select-menu",
                            option: () => "select-option"
                        }}
                        options={servicesOptions}
                        value={selectedOption}
                        onChange={(data) => setSelectedOption(data)}
                        isSearchable={true}
                        isMulti={true}
                        className="bg-transparent"
                    />



                </label>

                <label className="grid space-y-3" htmlFor="budget">
                    <span>
                        Budget:
                    </span>
                    <input type="range" name="budget" id="budget" min="10000" max="50000" value={budget} onChange={handleChange} />
                    <div >
                        <span >
                            Rs 10,000
                        </span>
                        <span >
                            Rs {budget}
                        </span>
                        <span >
                            Rs 50,000 +
                        </span>
                    </div>
                </label>

                <label htmlFor="message" >
                    <span>
                        Message:
                    </span>
                    <textarea name="message" value={message} onChange={handleChange} id="mesasge" cols={30} rows={5}></textarea>
                </label>

                <button  onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Form