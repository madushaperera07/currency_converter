

const Calculator = () => {
    return (
        <div class="calculator_container">
            <div class="calculator">
                <form>
                    <div>
                        <input class="input_cal" type="text" />
                    </div>
                    <div>
                        <input class="button_cla" type="button" value="AC" />
                        <input class="button_cla" type="button" value="DE" />
                        <input class="button_cla" type="button" value="%" />
                        <input class="button_cla" type="button" value="/" />
                    </div>
                    <div>
                        <input class="button_cla" type="button" value="7" />
                        <input class="button_cla" type="button" value="8" />
                        <input class="button_cla" type="button" value="9" />
                        <input class="button_cla" type="button" value="*" />
                    </div><div>
                        <input class="button_cla" type="button" value="4" />
                        <input class="button_cla" type="button" value="5" />
                        <input class="button_cla" type="button" value="6" />
                        <input class="button_cla" type="button" value="-" />
                    </div>
                    <div class="up_container">
                        <div><input class="button_cla" type="button" value="1" />
                            <input class="button_cla" type="button" value="2" />
                            <input class="button_cla" type="button" value="3" /></div>

                        <input class="button_cla_plus" type="button" value="+" />

                    </div><div class="bottom_container">

                        <input class="button_cla_zero" type="button" value="0" />
                        <input class="button_cla" type="button" value="=" />
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Calculator