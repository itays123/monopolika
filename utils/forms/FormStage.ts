export type CompleteHandler<Fields> = (values: Fields) => Promise<void>;

abstract class FormStage<Fields extends {}, Display> {

    private completeHandler: CompleteHandler<Fields>

    constructor(
        protected initialState: Fields,
        public nextStage: <T>(values: Fields) => FormStage<T, Display>
    ) {}

    async onComplete(handler: CompleteHandler<Fields>) {
        this.completeHandler = handler;
    }

    /**
     * Validate form values
     */
    abstract validate(values: Fields): { [Key in keyof Fields]?: string }

    /**
     * The form to render when state is mutating.
     * Ensure calling the complete handler when completed
     */
    abstract renderForm(): Display;

    /**
     * The UI to render when stage is completed
     */
    abstract renderCompleted(state: Fields, onStageClick: () => void): Display;
}

export default FormStage