import{j as e}from"./jsx-runtime-1a1b98e7.js";import{C as a}from"./Content-d0768478.js";import{M as i}from"./MockContent-9b8394c1.js";import{M as l}from"./MockCopy-ef682cd6.js";import{G as b,O as s}from"./Grid.styles-e449d411.js";import{R as f,I as n}from"./InlineContainer.hoc-4f4ff292.js";import"./index-29d3bc65.js";import"./_commonjsHelpers-f86d8be3.js";import"./styled-components.browser.esm-852d80e5.js";import"./devices-1d39230d.js";import"./breakPoints-89c7d41a.js";import"./Grid.constants-81b9ad1f.js";import"./AnchorsNav.constants-3fd2a829.js";const R={title:"Components/Rich Text",component:f,argTypes:{children:{control:{disable:!0}}},parameters:{docs:{source:{code:`
          const MyInlineComponent = withInlineContainer(MyComponent);

          return (
            <RichText>
              <p>Aliquip exercitation excepteur commodo ex eiusmod cillum enim do duis ex mollit voluptate eiusmod commodo ea.
              <p>Ipsum incididunt anim deserunt est.</p>
              <MyInlineComponent />
              <p>Duis ea irure reprehenderit exercitation in sit.</p>
              <p>Qui est id consectetur cillum tempor ipsum ipsum sint deserunt ea excepteur.</p>
              <InlineContainer>
                <MyComponent />
              </InlineContainer>
            </RichText>
          );
        `}}}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsx(n,{children:e.jsx(i,{label:"Inline Container"})}),e.jsx("p",{children:"Anim reprehenderit aute qui. Deserunt deserunt duis ex elit aute dolore reprehenderit voluptate aliquip sit non ullamco reprehenderit quis. Eu aliquip ad ad cupidatat. Consectetur ipsum qui id aute laboris sit."})]})},decorators:[a]},t={tags:["storyshot:vp:all"],args:{children:e.jsxs(b,{children:[e.jsx(l,{}),e.jsx(n,{children:e.jsx(i,{label:"Inline Container"})}),e.jsx("p",{children:"Anim reprehenderit aute qui. Deserunt deserunt duis ex elit aute dolore reprehenderit voluptate aliquip sit non ullamco reprehenderit quis. Eu aliquip ad ad cupidatat. Consectetur ipsum qui id aute laboris sit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"}),e.jsx(n,{children:e.jsx(s,{children:e.jsx(i,{label:"Full Bleed"})})}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"}),e.jsx(n,{children:e.jsx(s,{align:"left",span:{tablet:3,laptop:4},children:e.jsx(i,{label:"Inset Left"})})}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"}),e.jsx(n,{children:e.jsx(s,{align:"right",span:{tablet:3,laptop:4},children:e.jsx(i,{label:"Inset Right"})})}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro!"})]})},decorators:[a]},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("span",{className:"drop-cap",children:"L"}),"orem ipsum dolor sit amet consectetur adipisicing elit. Sint iure beatae impedit tempore temporibus dolorum alias quod dolore porro? Tenetur illo perferendis saepe neque nostrum iste eos animi repellendus porro! Anim reprehenderit aute qui. Deserunt deserunt duis ex elit aute dolore reprehenderit voluptate aliquip sit non ullamco reprehenderit quis. Eu aliquip ad ad cupidatat. Consectetur ipsum qui id aute laboris sit."]}),e.jsx(l,{})]})},decorators:[a]};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        <MockCopy />
        <InlineContainer>
          <MockContent label="Inline Container" />
        </InlineContainer>
        <p>
          Anim reprehenderit aute qui. Deserunt deserunt duis ex elit aute
          dolore reprehenderit voluptate aliquip sit non ullamco reprehenderit
          quis. Eu aliquip ad ad cupidatat. Consectetur ipsum qui id aute
          laboris sit.
        </p>
      </>
  },
  decorators: [Content]
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,c,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['storyshot:vp:all'],
  args: {
    children: <Grid>
        <MockCopy />
        <InlineContainer>
          <MockContent label="Inline Container" />
        </InlineContainer>
        <p>
          Anim reprehenderit aute qui. Deserunt deserunt duis ex elit aute
          dolore reprehenderit voluptate aliquip sit non ullamco reprehenderit
          quis. Eu aliquip ad ad cupidatat. Consectetur ipsum qui id aute
          laboris sit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
          beatae impedit tempore temporibus dolorum alias quod dolore porro?
          Tenetur illo perferendis saepe neque nostrum iste eos animi
          repellendus porro!
        </p>
        <InlineContainer>
          <OffGrid>
            <MockContent label="Full Bleed" />
          </OffGrid>
        </InlineContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
          beatae impedit tempore temporibus dolorum alias quod dolore porro?
          Tenetur illo perferendis saepe neque nostrum iste eos animi
          repellendus porro!
        </p>
        <InlineContainer>
          <OffGrid align="left" span={{
          tablet: 3,
          laptop: 4
        }}>
            <MockContent label="Inset Left" />
          </OffGrid>
        </InlineContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
          beatae impedit tempore temporibus dolorum alias quod dolore porro?
          Tenetur illo perferendis saepe neque nostrum iste eos animi
          repellendus porro!
        </p>
        <InlineContainer>
          <OffGrid align="right" span={{
          tablet: 3,
          laptop: 4
        }}>
            <MockContent label="Inset Right" />
          </OffGrid>
        </InlineContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
          beatae impedit tempore temporibus dolorum alias quod dolore porro?
          Tenetur illo perferendis saepe neque nostrum iste eos animi
          repellendus porro!
        </p>
      </Grid>
  },
  decorators: [Content]
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var q,x,C;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>
          <span className="drop-cap">L</span>orem ipsum dolor sit amet
          consectetur adipisicing elit. Sint iure beatae impedit tempore
          temporibus dolorum alias quod dolore porro? Tenetur illo perferendis
          saepe neque nostrum iste eos animi repellendus porro! Anim
          reprehenderit aute qui. Deserunt deserunt duis ex elit aute dolore
          reprehenderit voluptate aliquip sit non ullamco reprehenderit quis. Eu
          aliquip ad ad cupidatat. Consectetur ipsum qui id aute laboris sit.
        </p>
        <MockCopy />
      </>
  },
  decorators: [Content]
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const E=["Default","WithInlineContainer","WithDropCap"];export{r as Default,o as WithDropCap,t as WithInlineContainer,E as __namedExportsOrder,R as default};
