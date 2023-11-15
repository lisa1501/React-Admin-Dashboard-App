# Welcome To Shoppy Dasboard
Shoppy dashboard is a fully mobile responsive and customizable application. Users can choose between six beautiful theme colors as well as between the dark and light modes. Admin panel includes one dashboard, three pages, four apps, and seven fully functional charts.
Three pages:
    1. Orders page includes a pagination system.
    2. Employees page includes a complete functional search, filtering features.
    3. Customers page is fully editable which means users can select multiple rows and delete them, and edit each field individually.
Four apps:
    1. Fully functional calendar ,users can drag and drop events, edit the title, location, start and end date, and can change the calendar view day, week, month, and agenda list.
    2. Kanban board just like the entire Trello or Jira app.
    3. Fully-fledged editor adds images and modifies text.
    4. Color picker app is highly useful and allows users to choose specific colors.

Seven charts and Some additional widgets such as 
	shopping cart notifications, chats, user profiles




<br>

[Click here to see it in action!](https://halisa-dashboard-app.netlify.app/)

<br>

## Installation

- `git clone https://github.com/lisa1501/React-Admin-Dashboard-App.git && cd React-Admin-Dashboard-App`
- install npm on the repo.
 
  - `npm install`
 -  run npm start

# Technologies Used
  The front end was created using Javascript and rendered using React. The Site was styled with the use of tailwindcss.
<br>

![image](https://github.com/lisa1501/React-Admin-Dashboard-App/blob/main/src/images/mainpage.png)

# Components

## Theme Setting
Theme setting components allow users can choose between six beautiful theme colors as well as between the dark and light modes.
<br>

![image](https://github.com/lisa1501/React-Admin-Dashboard-App/blob/main/src/images/themesetting.png)

<br>

```javascript
 //---------------------------------Theme settings--------------------------------
 const ThemeSettings = () => {
    const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();
    return (
        <div className="bg-half-transparent w-screen 
            fixed nav-item top-0 right-0">
                <div className="float-right h-screen dark:text-gray-200
                    bg-white dark:[#484B52] w-400">
                    <div className="flex justify-between 
                        items-center p-4 ml-4">
                            <p className="font-semibold text-xl">Settings</p>
                            <button type="button"
                                onClick={() => setThemeSettings(false)}
                                style={{ color:'rgb(153, 171, 180)', 
                                borderRadius: '50%' }}
                                className="text-2xl p-3
                                hover:drop-shadow-xl hover:bg-light-gray">
                                <MdOutlineCancel />
                            </button>
                        </div>
                        <div className="flex-col border-t-1 
                            border-color p-4 ml-4">
                                <p className="font-semibold text-lg">Theme Options</p>
                                <div className="mt-4">
                                    <input 
                                        type="radio"
                                        id="light"
                                        name="theme"
                                        value="Light"
                                        className="cursor-pointer"
                                        onChange={setMode}
                                        checked={currentMode === 'Light'}/>
                                    <label htmlFor="light"
                                    className="ml-2 text-md
                                    cursor-pointer">Light</label>
                                </div>
                                <div className="mt-4">
                                    <input 
                                        type="radio"
                                        id="dark"
                                        name="theme"
                                        value="Dark"
                                        className="cursor-pointer"
                                        onChange={setMode}
                                        checked={currentMode === 'Dark'}/>
                                    <label htmlFor="dark"
                                    className="ml-2 text-md
                                    cursor-pointer">Dark</label>
                                </div>
                        </div>
                        <div className="flex-col border-t-1 
                    border-color p-4 ml-4">
                    <p className="font-semibold text-lg">Theme Colors</p>
                    <div className="flex gap-3">
                        {themeColors.map((item, index) => (
                            <TooltipComponent key={index}
                                content={item.name}
                                position="TopCenter">
                                    <div className="relative mt-2 cursor-pointer 
                                    flex gap-5 items-center">
                                        <button type="button"
                                            className="h-10 w-10 
                                            rounded-full cursor-pointer"
                                            style={{backgroundColor:item.color}}
                                            onClick={() => setColor(item.color)}>
                                            <BsCheck className={`ml-2
                                            text-2xl text-white
                                            ${item.color === currentColor ?'block' : 'hidden'}`} />
                                        </button>

                                    </div>

                            </TooltipComponent>
                        ))}
                    </div>
                </div>
                
        </div>
        </div>
    )
}
 
```
<br>

## Calendar 
On this page, users can drag and drop events, edit the title, location, start and end date, and can change the calendar view day, week, month, and agenda list.
<br>

![image](https://github.com/lisa1501/React-Admin-Dashboard-App/blob/main/src/images/calendar.png)
<br>

```javascript
 //---------------------------------calendar--------------------------------
 const Calendar = () => {
    const [scheduleObj, setScheduleObj] = useState();
    
    const change = (args) => {
        scheduleObj.selectedDate = args.value;
        scheduleObj.dataBind();
    };
    
    const onDragStart = (arg) => {
        // eslint-disable-next-line no-param-reassign
        arg.navigation.enable = true;
    };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10
        bg-white rounded-3xl">
            <Header category="App" title="Calendar" />
            <ScheduleComponent
                height="650px"
                ef={(schedule) => setScheduleObj(schedule)}
                eventSettings={{ dataSource:scheduleData}}
                selectedDate={new Date().toISOString()}
                dragStart={onDragStart}>

                <ViewsDirective>
                    { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
                </ViewsDirective>
                    
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, 
                    Resize, DragAndDrop]}/>
            </ScheduleComponent>
            <PropertyPane>
                <table
                    style={{ width: '100%', background: 'white' }}
                    >
                    <tbody>
                        <tr style={{ height: '50px' }}>
                            <td style={{ width: '100%' }}>
                                <DatePickerComponent
                                    value={new Date().toISOString()}
                                    showClearButton={false}
                                    placeholder="Current Date"
                                    floatLabelType="Always"
                                    change={change}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </PropertyPane>
        </div>
    );
}

```
<br>

