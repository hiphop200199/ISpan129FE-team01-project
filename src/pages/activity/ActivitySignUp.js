import React from 'react'
import Stepper from './Stepper'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

function ActivitySignUp() {
  //頁數
  const [step, setStep] = useState(1)
  const handleStepChange = (newStep) => {
    setStep(newStep)
  }

  //第一步列表
  const [tagCheck, setTagCheck] = useState('tab1')
  const handleChange = (event) => {
    setTagCheck(event.target.id)
  }
  const { activity_id } = useParams()
  const id = localStorage.getItem('id')
  const [activity, setActivity] = useState({})
  const [member, setMember] = useState({})
  const [pets, setPets] = useState([])
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    fetchData()
  }, [activity_id, id])
  // console.log(activity)

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3002/activity/activitydetail/${activity_id}`,
      {
        method: 'GET',
      }
    )
    const activities = await res.json()
    setActivity(activities)

    const res2 = await fetch(`http://localhost:3002/member/pet/${id}`, {
      method: 'GET',
    })
    const pets = await res2.json()
    setPets(pets)

    const res3 = await fetch(`http://localhost:3002/member/edit/${id}`, {
      method: 'GET',
    })
    const member = await res3.json()
    setMember(member)

    setFirstRender(false)
  }

  //第二步表單
  const [pet, setPet] = useState({
    name: '',
    type: 'other',
    gender: '',
  })
  //---用於記錄錯誤訊息之用
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    type: '',
    gender: '',
  })
  //---處理每個欄位的變動
  const handleFieldChange = (e) => {
    //---以下要依照通用的三步驟原則來更新狀態
    setPet({ ...pet, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    //---第一航要阻擋預設的form送出行為
    e.preventDefault()
    //---獲得目前的表單輸入值
    //---1.從state獲得
    console.log(pet)
    //---2. 用FormData API獲得
    const formData = new FormData(e.target)
    console.log(formData.get('name'))
    formData.set('activity_id', activity_id)

    //---做送至伺服器(fetch, ajax...) ->submit
    fetch(`http://localhost:3002/member/addPet/${id}`, {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success1) {
          fetchData()
        } else {
          alert('新增失敗')
        }
        console.log(data)
      })
  }
  //表單有發生驗證錯誤時，會觸發事件
  const handelInvalid = (e) => {
    e.preventDefault()
    console.log('檢查有錯誤:', e.target.name, e.target.validationMessage)

    //紀錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  // 當使用者回頭修正表單中任一欄位時，先清除此欄位的錯誤訊息
  const handleFormChange = (e) => {
    // 記錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  const submitActivity = (e) => {
    const formA = document.querySelector('#formActivity')
    const fd = new FormData(formA)
    fd.set('mid', id)
    fd.set('activity_id', activity_id)
    for (let i in fd.entries()) {
      console.log(i)
    }

    const url = `http://localhost:3002/member/addForm`
    fetch(url, {
      method: 'post',
      body: fd,
    })
      .then((r) => r.json())
      .then((rData) => {
        if (rData.success) {
          navigate(setStep(3))
          fetchData()
        } else {
          alert('新增失敗')
        }
        console.log(url, rData)
      })
  }

  return (
    <>
      {firstRender ? (
        false
      ) : (
        <div className="SignUp-page">
          <div className="SignUp-head">
            <Stepper step={step} />
          </div>
          <div>
            {/* 步驟一 */}
            {step === 1 && (
              <div>
                {/* 步驟一的內容。 */}
                <main className="checkoutFlow">
                  <div className="tabs">
                    <input
                      type="radio"
                      className="tabs__radio"
                      name="tabs-example"
                      id="tab1"
                      onChange={handleChange}
                      checked={tagCheck === 'tab1'}
                    />
                    <label htmlFor="tab1" className="tabs__label">
                      活動
                    </label>
                    <div className="tabs__content">
                      <table>
                        <thead>
                          <tr>
                            <th>商品圖</th>
                            <th>名稱</th>
                            <th>活動日期</th>
                            <th>截止日期</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={`http://localhost:3002/uploads/${activity.activity_image}/`}
                                alt=""
                              />
                            </td>
                            <td>{activity.activity_name}</td>
                            <td>
                              {new Date(activity.activity_datestart).toString(
                                'yyyy-MM-dd'
                              )}
                            </td>
                            <td>
                              {new Date(activity.activity_dateend).toString(
                                'yyyy-MM-dd'
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </main>
                <div className="mt-5 d-flex justify-content-between">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => handleStepChange(2)}
                  >
                    下一步
                  </button>
                </div>
              </div>
            )}

            {/* 步驟二 */}
            {step === 2 && (
              <div>
                <div className="step2-container">
                  {/* 步驟二的內容。 */}
                  <div>
                    <h5>報名人資料</h5>
                    <p>姓名:{member.name}</p>
                    <p>電話:{member.mobile}</p>
                    <p>信箱:{member.email}</p>
                    {/* <p>{member.pet_name}</p> */}
                    <form name="formActivity" id="formActivity">
                      <div>
                        {pets.map((el, idx) => {
                          return (
                            <div key={idx}>
                              <input
                                className="form-check-input"
                                type="radio"
                                name="pets"
                                id="pets"
                                value={el.pet_id}
                                checked
                              />
                              {el.pet_name}
                              <label
                                className="form-check-label"
                                for="exampleRadios1"
                              ></label>
                            </div>
                          )
                        })}
                      </div>
                    </form>
                  </div>
                  <div>
                    <section>
                      <h5>新增寵物</h5>
                      <form
                        className="member-form"
                        onSubmit={handleSubmit}
                        onInvalid={handelInvalid}
                        onChange={handleFormChange}
                      >
                        <input type="hidden" name="id" value={id} />
                        <label className="form-control">
                          <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="名字"
                            value={pet.name}
                            onChange={handleFieldChange}
                            required
                          />
                          <br />
                          <span className="error">{fieldErrors.name}</span>
                        </label>

                        <label className="form-control">
                          寵物種類:
                          <select
                            onChange={handleFieldChange}
                            name="type"
                            value={pet.type}
                          >
                            <option value="cat">貓</option>
                            <option value="dog">狗</option>
                            <option value="other">其他</option>
                          </select>
                        </label>
                        <label className="form-control">
                          寵物種類:
                          <div>
                            <input
                              onChange={handleFieldChange}
                              type="radio"
                              value="boy"
                              name="gender"
                            />
                            男生
                            <input
                              onChange={handleFieldChange}
                              type="radio"
                              value="girl"
                              name="gender"
                            />
                            女生
                          </div>
                        </label>
                        <button>送出</button>
                      </form>
                    </section>
                  </div>
                </div>
                <div className="mt-5 d-flex justify-content-between">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => handleStepChange(1)}
                  >
                    上一步
                  </button>
                  <button
                    className="btn btn-primary btn-lg"
                    type="submit"
                    onClick={submitActivity}
                  >
                    送出
                  </button>
                </div>
              </div>
            )}

            {/* 步驟三 */}
            {step === 3 && (
              <div>
                <h1>報名成功</h1>
                <p>這是最後一個步驟的內容。</p>
                <a href="/" class="button">
                  完成
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ActivitySignUp
