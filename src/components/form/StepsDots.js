const StepsDots = ({ activeStep }) => {
  const steps = [1, 2, 3];
  return (
    <div class="ct_step_slider_dots">
      {steps.map((item) => {
        return (
          <>
            <span class={item == activeStep ? "active" : ""}></span>
          </>
        );
      })}
    </div>
  );
};

export default StepsDots;
