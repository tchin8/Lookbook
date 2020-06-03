import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();

    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      birthday: `${this.year}-${this.month}-${this.day}`,
      gender: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    debugger; 
    e.preventDefault();
    
    this.props.signup( this.state );
  }

  handleBlur(e) {
    e.preventDefault();

    let classN = "";
    if (e.currentTarget.classList.contains('fname')) {
      classN = "fname";
    } else if (e.currentTarget.classList.contains('lname')) {
      classN += "lname";
    } else if (e.currentTarget.classList.contains('email')) {
      classN += "email";
    } else if (e.currentTarget.classList.contains('pw')) {
      classN += "pw";
    } else if (e.currentTarget.classList.contains('mfc')) {
      classN += "mfc";
    }

    if (e.currentTarget.value.length === 0) {
      e.currentTarget.classList.add("blur");
      // e.target.classList.remove("hidden");
      $(`.fa-exclamation-circle-${classN}`).removeClass('hidden');
    } else {
      e.currentTarget.classList.remove("blur");
      $(`.fa-exclamation-circle-${classN}`).addClass('hidden');
      $(`.${classN}-error-msg`).addClass('hidden');
    }

    $(`.fname-error-msg`).addClass('hidden');
    $(`.lname-error-msg`).addClass('hidden');
    $(`.email-error-msg`).addClass('hidden');
    $(`.pw-error-msg`).addClass('hidden');
    $(`.mfc-error-msg`).addClass('hidden');
  }

  handleFocus(e) {
    let classN = "";
    if (e.currentTarget.classList.contains('fname')) {
      classN += "fname";
    } else if (e.currentTarget.classList.contains('lname')) {
      classN += "lname";
    } else if (e.currentTarget.classList.contains('email')) {
      classN += "email";
    } else if (e.currentTarget.classList.contains('pw')) {
      classN += "pw";
    } else if (e.currentTarget.classList.contains('mfc')) {
      classN += "mfc";
    }

    $(`.fname-error-msg`).addClass('hidden');
    $(`.lname-error-msg`).addClass('hidden');
    $(`.email-error-msg`).addClass('hidden');
    $(`.pw-error-msg`).addClass('hidden');
    $(`.mfc-error-msg`).addClass('hidden');

    // $(`.fa-exclamation-circle-${classN}`).addClass('hidden');
    $(`.${classN}-error-msg`).removeClass('hidden');
    
  }

  update(field) {
    // debugger;
    return e => {
      return this.setState({ [field]: e.target.value });
    }
  }

  updateBday(field) {
    return e => {
      if (field === 'month') {
        this.month = e.target.value;
      } else if (field === 'year') {
        this.year = e.target.value;
      } else {
        this.day = e.target.value;
      }
      return this.setState({ birthday: `${this.year}-${this.month}-${this.day}` });
    }
  }

  handleErrors() {
    // $(`.${firstClassN}-error-msg`).removeClass('hidden');
    const errors = Array.from(this.props.errors);
    let classN = "";
    let firstClassN ="";

    for (let i = 0; i < errors.length; i++) {
      const error = errors[i];
      // console.log(error);

      if (error.includes('Fname')) {
        classN = "fname";
      } else if (error.includes('Lname')) {
        classN = "lname";
      } else if (error.includes('Email')) {
        classN = "email";
      } else if (error.includes('Password')) {
        classN = "pw";
      } else if (error.includes('Gender')) {
        classN = "mfc";
      }

      // console.log(classN);
      if (i === 0) {
        firstClassN = classN;
      }

      $(`.fa-exclamation-circle-${classN}`).removeClass('hidden');
      $(`.${firstClassN}-error-msg`).removeClass('hidden');
      if (classN !== firstClassN) {
        $(`.${classN}-error-msg`).addClass('hidden');
      }
      $(`input.${classN}`).addClass('blur');

      this.props.errors.shift();
    }
  }

  render() {
    const errors = Array.from(this.props.errors)
    if (errors && !errors.join(' ').includes("entered")) {
      this.handleErrors();
    }

    return (
      <form className="signup" 
        onSubmit={this.handleSubmit} >
        <div className="sfname">
          <label>
            <input type="text" 
              placeholder="First name" 
              className="fname"
              value={this.state.fname} 
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              onChange={this.update('fname')}/>

              <FontAwesomeIcon icon='exclamation-circle' className="fa-exclamation-circle-fname hidden" />

              <div className="fname-error-msg hidden">
                <p>What's your name?</p>
              </div>
          </label>

          <label>
            <input type="text" 
              placeholder="Last name" 
              className="lname"
              value={this.state.lname}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              onChange={this.update('lname')}/>

            <FontAwesomeIcon icon='exclamation-circle' className="fa-exclamation-circle-lname hidden" />

            <div className="lname-error-msg hidden">
              <p>What's your name?</p>
            </div>
          </label>
        </div>

        <label className="sfemail">
          <input type="text" 
            placeholder="Mobile number or email"
            className="email" 
            value={this.state.email}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onChange={this.update('email')}/>

          <FontAwesomeIcon icon='exclamation-circle' className="fa-exclamation-circle-email hidden" />

          <div className="email-error-msg hidden">
            <p>You'll use this when you log in and if you ever need to reset your password</p>
          </div>
        </label>

        <label className="sfpw">
          <input type="password" 
            placeholder="New password" 
            className="pw"
            value={this.state.password}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onChange={this.update('password')}/>

          <FontAwesomeIcon icon='exclamation-circle' className="fa-exclamation-circle-pw hidden" />

          <div className="pw-error-msg hidden">
            <p>Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).</p>
          </div>
        </label>

        <div className="bday">
          <label className="bday">Birthday</label>
          <select className="month" 
            value={this.state.birthday.split('-')[1]}
            onChange={this.updateBday('month')}>
            <option>Month</option>
            <option value={1}>Jan</option>
            <option value={2}>Feb</option>
            <option value={3}>Mar</option>
            <option value={4}>Apr</option>
            <option value={5}>May</option>
            <option value={6}>Jun</option>
            <option value={7}>Jul</option>
            <option value={8}>Aug</option>
            <option value={9}>Sep</option>
            <option value={10}>Oct</option>
            <option value={11}>Nov</option>
            <option value={12}>Dec</option>
          </select>
          <select className="day" 
            value={this.state.birthday.split('-')[2]}
            onChange={this.updateBday('day')}>
            <option>Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          <select className="yr" 
            value={this.state.birthday.split('-')[0]}
            onChange={this.updateBday('year')}>
            <option>Year</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
            <option value="1987">1987</option>
            <option value="1986">1986</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1983">1983</option>
            <option value="1982">1982</option>
            <option value="1981">1981</option>
            <option value="1980">1980</option>
            <option value="1979">1979</option>
            <option value="1978">1978</option>
            <option value="1977">1977</option>
            <option value="1976">1976</option>
            <option value="1975">1975</option>
            <option value="1974">1974</option>
            <option value="1973">1973</option>
            <option value="1972">1972</option>
            <option value="1971">1971</option>
            <option value="1970">1970</option>
            <option value="1969">1969</option>
            <option value="1968">1968</option>
            <option value="1967">1967</option>
            <option value="1966">1966</option>
            <option value="1965">1965</option>
            <option value="1964">1964</option>
            <option value="1963">1963</option>
            <option value="1962">1962</option>
            <option value="1961">1961</option>
            <option value="1960">1960</option>
            <option value="1959">1959</option>
            <option value="1958">1958</option>
            <option value="1957">1957</option>
            <option value="1956">1956</option>
            <option value="1955">1955</option>
            <option value="1954">1954</option>
            <option value="1953">1953</option>
            <option value="1952">1952</option>
            <option value="1951">1951</option>
            <option value="1950">1950</option>
            <option value="1949">1949</option>
            <option value="1948">1948</option>
            <option value="1947">1947</option>
            <option value="1946">1946</option>
            <option value="1945">1945</option>
            <option value="1944">1944</option>
            <option value="1943">1943</option>
            <option value="1942">1942</option>
            <option value="1941">1941</option>
            <option value="1940">1940</option>
            <option value="1939">1939</option>
            <option value="1938">1938</option>
            <option value="1937">1937</option>
            <option value="1936">1936</option>
            <option value="1935">1935</option>
            <option value="1934">1934</option>
            <option value="1933">1933</option>
            <option value="1932">1932</option>
            <option value="1931">1931</option>
            <option value="1930">1930</option>
            <option value="1929">1929</option>
            <option value="1928">1928</option>
            <option value="1927">1927</option>
            <option value="1926">1926</option>
            <option value="1925">1925</option>
            <option value="1924">1924</option>
            <option value="1923">1923</option>
            <option value="1922">1922</option>
            <option value="1921">1921</option>
            <option value="1920">1920</option>
            <option value="1919">1919</option>
            <option value="1918">1918</option>
            <option value="1917">1917</option>
            <option value="1916">1916</option>
            <option value="1915">1915</option>
            <option value="1914">1914</option>
            <option value="1913">1913</option>
            <option value="1912">1912</option>
            <option value="1911">1911</option>
            <option value="1910">1910</option>
            <option value="1909">1909</option>
            <option value="1908">1908</option>
            <option value="1907">1907</option>
            <option value="1906">1906</option>
            <option value="1905">1905</option>
          </select>
        </div>

        <span className="mf">Gender</span>
        <label className="mfc">
          <input type="radio" 
            value="Female" 
            name="g"
            className="mfc"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onClick={this.update('gender')}/>Female
        </label>

        <label className="mfc">
          <input type="radio" 
            value="Male" 
            name="g"
            className="mfc"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onClick={this.update('gender')}/>Male
        </label>

        <label className="mfc">
          <input type="radio" 
            name="g" 
            className="mfc"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            value="Custom" />Custom
          <FontAwesomeIcon icon='exclamation-circle' className="fa-exclamation-circle-mfc hidden" />
        </label>

        <p className="tac">By clicking Sign Up, you agree to our <span>Terms</span>, <span>Data Policy</span> and <span>Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.</p>

        <button className="btn-s" type="submit">Sign Up</button>
      </form>
    )
  }
};

export default SignupForm;