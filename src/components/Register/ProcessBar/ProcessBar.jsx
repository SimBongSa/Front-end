import { ProcessContainer, ProcessWrap, ProcessStepCont, ProcessStep, ProcessActive, ProcessItem, ProcessLabel } from "./ProcessBar.styld";

const ProcessBar = ({ step, setStep }) => {

  return (
    <ProcessContainer>
      <ProcessWrap>
        <ProcessItem>
          <ProcessStepCont>
            {
              step >= 0 
                ? (
                    <ProcessActive>
                      <div className="process-step"></div>
                      <ProcessLabel>STEP 1</ProcessLabel>
                    </ProcessActive>
                  ) 
                : (
                    <ProcessStep>
                      <div className="process-step"></div>
                      <ProcessLabel>STEP 1</ProcessLabel>
                    </ProcessStep>
                  )
            }
          </ProcessStepCont>
        </ProcessItem>

        <ProcessItem>
          <ProcessStepCont>
          {
              step >= 1 
                ? (
                    <ProcessActive>
                      <div className="process-step"></div>
                      <ProcessLabel>STEP 2</ProcessLabel>
                    </ProcessActive>
                  ) 
                : (
                    <ProcessStep>
                      <div className="process-step"></div>
                      <ProcessLabel>STEP 2</ProcessLabel>
                    </ProcessStep>
                  )
            }
          </ProcessStepCont>
        </ProcessItem>

        <ProcessItem>
          <ProcessStepCont>
          {
              step >= 2 
                ? (
                    <ProcessActive>
                      <div className="process-step"></div>
                      <ProcessLabel>STEP 3</ProcessLabel>
                    </ProcessActive>
                  ) 
                : (
                    <ProcessStep>
                      <div className="process-step"></div>
                      <ProcessLabel>STEP 3</ProcessLabel>
                    </ProcessStep>
                  )
            }
          </ProcessStepCont>
        </ProcessItem>

        <ProcessItem>
          <ProcessStepCont>
          {
              step >= 3 
                ? (
                    <ProcessActive>
                      <div className="process-step"></div>
                      <ProcessLabel>STEP 4</ProcessLabel>
                    </ProcessActive>
                  ) 
                : (
                    <ProcessStep>
                      <div className="process-step"></div>
                      <ProcessLabel>STEP 4</ProcessLabel>
                    </ProcessStep>
                  )
            }
          </ProcessStepCont>
        </ProcessItem>
      </ProcessWrap>
    </ProcessContainer>
  )
};

export default ProcessBar;