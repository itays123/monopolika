export type CompleteHandler<Fields> = (values: Fields) => Promise<void>;

abstract class FormStage<Fields extends {}, Display> {

    protected completeHandler: CompleteHandler<Fields>

    constructor(
        protected initialState: Fields,
        public nextStage: (values: Fields) => FormStage<unknown, Display> | undefined = undefined
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
    protected abstract renderFormFromState(state: Fields): Display;

    renderForm(values: Fields): Display {
        const currentState = { ...this.initialState, ...values };
        return this.renderFormFromState(currentState);
    }

    /**
     * The UI to render when stage is completed
     */
    abstract renderCompleted(state: Fields, onStageClick: () => void): Display;
}

export default FormStage