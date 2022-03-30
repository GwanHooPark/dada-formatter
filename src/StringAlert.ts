/**
 * alert을 출력
 *
 * @export
 * @class StringAlert
 */

export class StringAlert {
	/**
	 * 입력받은 문자열을 alert창에 나타낸다.
	 *
	 * @param {string} value
	 * @memberof StringAlert
	 */
	public DadaConsole(value: string): void {
		alert(value);
		if (value == 'test') {
			alert(1);
		} else {
			alert(2);
		}
	}
}
