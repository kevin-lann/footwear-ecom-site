import Input from "../../components/Input"
import "./Category.css"

const Category = ({handleChange}) => {
  return <div className="ml">
      <h2 className="sidebar-title">Category</h2>

      <div classNane="sidebar-items">

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test"/>
          <span className="checkmark"></span> All
        </label>

        <Input
          handleChange={handleChange}
          value="running shoes"
          title="Running Shoes"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="low tops"
          title="Low Tops"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>

    </div>
}

export default Category