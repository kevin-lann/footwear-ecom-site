import "./Gender.css"
import Input from "../../components/Input"

const Gender = ({handleChange}) => {
  return <div className="ml">

      <h2 className="sidebar-title gender-title">Gender</h2>
      
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test4"/>
          <span className="checkmark"></span> All
      </label>

      <Input
        handleChange={handleChange}
        value={"men's"}
        title="Men's"
        name="test4"
      />
      <Input
        handleChange={handleChange}
        value={"women's"}
        title="Women's"
        name="test4"
      />
    </div>
}

export default Gender