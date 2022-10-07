abstract class FormStage<Fields extends {}, Display> {

    constructor(
        protected initialState: Fields,
        protected onComplete: (values: Fields) => Promise<void>
    ) {}

    /**
     * Validate form values
     */
    abstract validate(values: Fields): { [Key in keyof Fields]?: string }

    /**
     * The form to render when state is mutating
     */
    abstract renderForm(): Display;

    /**
     * The UI to render when stage is completed
     */
    abstract renderCompleted(state: Fields, emitStageClick: () => {}): Display;
}

export default FormStage