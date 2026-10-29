<script>
import Card from '../Card.vue';
import Button from '../Button.vue';
import Logo from '@/assets/Logo.vue';
import learningImg from '@/assets/learningImg.vue';
import preview from '@/assets/preview.vue';
import poster from '@/assets/poster.vue';
import chart from '@/assets/chart.vue';
import transact from '@/assets/transact.vue';
import wallet from '@/assets/wallet.vue';

export default {
    components: {
        Card,
        Button,
        Logo,
        learningImg,
        preview,
        poster,
        chart,
        transact,
        wallet
    },
}
</script>

<template>

    <navBar v-slot:default>
        <div class="flex">
            <logo size="30" />
            <h2>Buffer</h2>
        </div>

        <div class="flexDiv">
            <p class="txt">
                Why Buffer
            </p>
            <p class="txt">
                How it works
            </p>
            <p class="txt">
                Field guide
            </p>
        </div>


        <Button @click="$router.push('/GetStarted')">Start your plan
        </Button>
    </NavBar>

    <div class="mainCon">
        <div class="smallCon">
            <h4 :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '700' }">MAKE ROOM FOR
                THE
                UNEXPECTED</h4>
            <h1 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '58px', }">Uneven income. A steadier life.
            </h1>
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '15px', }">Your earnings don’t
                follow a
                straight
                line. Your peace of mind shouldn’t have to. Build a budget that
                bends with freelance work, student life, and everything in between.</p>

            <div class="btnDiv" :style="{ justifyContent: 'flex-start' }">
                <Button :style="{ backgroundColor: '#246B5D', color: '#FFFFFF', border: 'none', gap: '8px' }">
                    Build my buffer
                    <Icon icon="mdi:arrow-right" />
                </Button>

                <Button class="btn">Explore a
                    sample</Button>
            </div>
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px', }">No bank connection. Start locally.
                Your
                pace.</p>
            <div :style="{ backgroundColor: '#246B5D', height: '1px', width: '100%' }"></div>
            <div class="flexDiv" :style="{ justifyContent: 'flex-start', gap: '18px' }">
                <p
                    :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '1px' }">
                    <Icon icon="lucide:check" />
                    Plan essentials first
                </p>
                <p
                    :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '1px' }">
                    <Icon icon="lucide:check" />
                    Test the what-ifs
                </p>
                <p
                    :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '1px' }">
                    <Icon icon="lucide:check" />
                    Keep control
                </p>
            </div>
        </div>
        <preview />
    </div>

    <navBar :style="{ backgroundColor: '#E5EFE9' }">
        <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '12px' }">
            FOR THE BETWEEN-PAYOUT DAYS
        </p>
        <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '14px' }">
            Freelancers
        </p>
        <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '14px' }">
            Students
        </p>
        <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '14px' }">
            Side projects
        </p>
        <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '14px' }">
            Real life
        </p>
    </navBar>

    <div class="mainCon">
        <div class="smallCon" :style="{ gap: '16px', width: '80%' }">
            <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '400', width: 'auto' }">01
                /
                A DIFFERENT
                KIND OF BUDGET</p>
            <h3 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '40px' }">Your rent is regular. Your income
                isn’t.</h3>
        </div>
        <div :style="{ gap: '18px', display: 'flex', flexDirection: 'column' }">
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '15px', }">A great month
                can hide a quiet one.
                Traditional budgets assume a paycheck will arrive right on time.
                Buffer starts with what you actually have, then makes uncertainty visible.</p>
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px' }">Separate money
                that’s here from
                money that might arrive. Protect your essentials before deciding what’s
                free to spend.</p>
        </div>
    </div>

    <div class="mainCon" :style="{ display: 'flex', flexDirection: 'column', gap: '32px', backgroundColor: '#E5EFE9' }">
        <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '400' }">02 / SMALL TOOLS.
            CLEARER DECISIONS.</p>
        <h3 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '42px' }">A plan with breathing room.</h3>
        <div class="flex" :style="{ gap: '20px' }">
            <Card>
                <wallet />
                <h3 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '22px', fontWeight: '400' }">Give every
                    dollar a role</h3>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px', fontWeight: '400' }">Start with
                    essentials, protect your savings, and find a realistic amount to spend.</p>
                <p
                    :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '10px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '1px' }">
                    Explore the tool
                    <Icon icon="mdi:arrow-right" />
                </p>
            </Card>

            <Card>
                <transact />
                <h3 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '22px', fontWeight: '400' }">Try the
                    uncomfortable what-if</h3>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px', fontWeight: '400' }">SA smaller
                    payout? A late invoice? See the impact before it becomes a surprise.</p>
                <p
                    :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '10px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '1px' }">
                    Explore the tool
                    <Icon icon="mdi:arrow-right" />
                </p>
            </Card>

            <Card>
                <chart />
                <h3 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '22px', fontWeight: '400' }">See how long
                    cash lasts</h3>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px', fontWeight: '400' }">Understand
                    monthly burn and runway, with and without expected income..</p>
                <p
                    :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '10px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '1px' }">
                    Explore the tool
                    <Icon icon="mdi:arrow-right" />
                </p>
            </Card>
        </div>
    </div>




    <div class="mainCon">
        <div class="smallCon">
            <h4 :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '700' }">03 / REHEARSE,
                DON’T WORRY</h4>
            <h1 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '40px', }">What if the next payout is 30%
                lower?
            </h1>
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '15px' }">Your earnings don’t
                Move one number. See the whole picture. Compare a baseline with a gentler month, and decide which
                adjustment feels manageable.</p>
            <div class="btnDiv" :style="{ justifyContent: 'flex-start' }">
                <Button>Try a scenario</Button>
            </div>
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '10px', }"> An estimate to learn from, not a
                prediction.</p>
        </div>
        <poster width="100%" height="auto" />
    </div>



    <div class="mainCon" :style="{ display: 'flex', flexDirection: 'column', gap: '32px', backgroundColor: '#E5EFE9' }">
        <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '400' }">04 / FROM GUESSWORK
            TO A SIMPLE ROUTINE.</p>
        <h3 :style="{ fontSize: '42px' }">Three steps. One calmer picture.</h3>
        <div class="flex" :style="{ gap: '20px' }">
            <Card :style="{ backgroundColor: 'transparent' }">
                <h3 :style="{ fontSize: '24px', fontWeight: '400' }">01</h3>
                <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }">Start with
                    what’s here</p>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '14px', }">
                    Add cash on hand and set protected savings aside.
                </p>
            </Card>

            <Card :style="{ backgroundColor: 'transparent' }">
                <h3 :style="{ fontSize: '24px', fontWeight: '400' }">02</h3>
                <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }">Map the near
                    future</p>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '14px', }">
                    List bills and payouts. Mark uncertain dates honestly.
                </p>
            </Card>

            <Card :style="{ backgroundColor: 'transparent' }">
                <h3 :style="{ fontSize: '24px', fontWeight: '400' }">03</h3>
                <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '18px', fontWeight: '600' }">Check in,
                    then carry on</p>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '14px', }">
                    Review your safe-to-spend amount and test a what-if.
                </p>
            </Card>
        </div>
    </div>


    <div class="mainCon" :style="{ display: 'flex', flexDirection: 'column', gap: '32px' }">
        <p :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '400' }">05 / BUILT AROUND
            YOUR LIFE</p>
        <h3 :style="{ color: '#263A33', fontFamily: 'Lora', fontSize: '42px' }">Same uncertainty. Different rhythms.
        </h3>
        <div class="flex" :style="{ gap: '20px' }">
            <Card>
                <div>
                    <h3 :style="{ fontFamily: 'Inter', fontSize: '18px', fontWeight: '400' }">For
                        freelancers</h3>
                    <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px', fontWeight: '400' }">Invoices,
                        retainers, and the occasional late payment</p>
                </div>
                <Icon icon="lucide:square" color="#246B5D" stroke-width="2" />
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '14px', fontWeight: '400' }">Budget
                    between projects, not just during them. Track expected invoices separately and model a delayed
                    client payout.</p>
                <p>
                    <a href="/" class="atxt txtbtn" :style="{ color: '#246B5D', fontWeight: '600', gap: '1px' }">
                        Plan around projects
                        <Icon icon="mdi:arrow-right" />
                    </a>
                </p>
            </Card>

            <Card>
                <div>
                    <h3 :style="{ fontSize: '18px', fontWeight: '400' }">For
                        students</h3>
                    <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px', fontWeight: '400' }">
                        Allowances, part-time shifts, and term-time costs</p>
                </div>
                <Icon icon="lucide:diamond" color="#246B5D" stroke-width="2" />
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '14px', fontWeight: '400' }">Stretch an
                    allowance across the semester. Set aside rent and course costs before your everyday spending.</p>
                <p>
                    <a href="/" class="atxt txtbtn" :style="{ color: '#246B5D', fontWeight: '600', gap: '1px' }">
                        Plan around a term
                        <Icon icon="mdi:arrow-right" />
                    </a>
                </p>
            </Card>
        </div>
    </div>


    <div class="mainCon" :style="{ backgroundColor: '#E5EFE9' }">
        <div class="smallCon">
            <h4 :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '700' }">06 / YOUR
                NUMBERS, YOUR CHOICE</h4>
            <h3>Start without an account.
            </h3>
            <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '16px' }">Keep your plan in
                this browser, or choose an optional synced account when you need access on another device.</p>
        </div>
        <div class="smallCon">
            <Card>
                <h3 :style="{ fontSize: '18px', fontWeight: '400' }">Local-only by
                    default</h3>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px', fontWeight: '400' }">
                    Saved in browser storage on this device. No automatic cross-device access. Clearing browser data can
                    erase your plan.</p>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px' }">Local storage
                    is not encrypted by Buffer. Export a backup and use a trusted device.</p>
            </Card>
            <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '13px' }">
                Optional sync is a separate choice, explained before you sign in. You can export or delete your data at
                any time.
            </p>
        </div>
    </div>


    <div class="mainCon" :style="{ gap: '10px' }">
        <div class="smallCon" :style="{ width: '100%' }">
            <h4 :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '700' }">07 / THE
                FINANCIAL FIELD GUIDE</h4>
            <div class="flex" :style="{ width: '100%', gap: '40px' }">
                <learningImg width="60%" height="auto" />
                <div class="smallCon" :style="{ gap: '12px' }">
                    <h3 :style="{ fontSize: '38px' }">Know the words. Trust your next
                        step.</h3>
                    <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '14px' }">
                        Short, practical lessons on cash flow, runway, and planning for income that changes. No jargon
                        spiral
                        required.</p>
                    <p :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '14px', fontWeight: '600' }">Start
                        here:
                        What
                        does “runway” actually mean?</p>
                    <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px' }">
                        5 minute read · Budgeting basics
                    </p>
                    <Button class="btn" :style="{ width: '160px' }">Open the field guide</Button>
                </div>
            </div>
        </div>
    </div>

    <div :style="{ backgroundColor: '#DBE1D8', height: '1px', width: '100%' }"></div>


    <div class="mainCon">
        <div class="smallCon" :style="{ width: '100%' }">
            <h4 :style="{ color: '#246B5D', fontFamily: 'Inter', fontSize: '11px', fontWeight: '700' }">08 / QUESTIONS,
                ANSWERED PLAINLY</h4>
            <h3>Before you begin.
            </h3>
            <div :style="{ backgroundColor: '#DBE1D8', height: '1px', width: '100%' }"></div>

            <div :style="{ gap: '10px' }">
                <h3 :style="{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '500' }">Do I need to
                    connect a bank?</h3>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px' }">No. Add income and expenses
                    manually, or import a CSV. You decide what goes into your plan.</p>
            </div>
            <div :style="{ backgroundColor: '#DBE1D8', height: '1px', width: '100%' }"></div>

            <div :style="{ gap: '10px' }">
                <h3 :style="{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '500' }">Does Buffer
                    count unpaid invoices as cash?</h3>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px' }">No. Received money and expected
                    earnings stay separate. Projections label future earnings as estimates.</p>
            </div>
            <div :style="{ backgroundColor: '#DBE1D8', height: '1px', width: '100%' }"></div>

            <div :style="{ gap: '10px' }">
                <h3 :style="{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '500' }">Is this
                    financial advice?</h3>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px' }">No. Buffer is an educational
                    planning tool, not personalized financial advice. You choose your assumptions.</p>
            </div>
            <div :style="{ backgroundColor: '#DBE1D8', height: '1px', width: '100%' }"></div>

            <div :style="{ gap: '10px' }">
                <h3 :style="{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '500' }">What happens
                    if I clear my browser?</h3>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px' }">A local-only plan may be
                    deleted. Export a backup in Settings so you can restore it later.</p>
            </div>
        </div>
    </div>

    <div class="mainCon" :style="{ backgroundColor: '#203E35' }">
        <div class="smallCon" :style="{ width: '100%' }">
            <h1 :style="{ color: '#FFFFFF', fontFamily: 'Lora', fontSize: '48px', }">You don’t need a perfect income.
                Just a
                clearer plan.
            </h1>
            <h3 :style="{ color: '#D2E0D8', fontFamily: 'Inter', fontSize: '14px', }">Start with
                today’s
                numbers. Make space for tomorrow.</h3>
            <Button class="btn" :style="{ backgroundColor: '#246B5D', color: '#FFFFFF', border: 'none' }">Build my
                buffer</Button>
            <p :style="{ color: '#D2E0D8', fontFamily: 'Inter', fontSize: '11px' }">Local-first · No bank connection ·
                Made
                for variable income</p>
        </div>
    </div>


    <div class="mainCon" :style="{ flexDirection: 'column', gap: '30px' }">
        <div class="smallCon" :style="{ width: '100%', flexDirection: 'row' }">
            <div :style="{ width: '50%' }">
                <div class="flex" :style="{ justifyContent: 'flex-start' }">
                    <logo size="30" />
                    <h2 :style="{ color: '#263A33', fontFamily: 'Inter', fontSize: '28px' }">Buffer</h2>
                </div>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '12px' }">A field guide for your financial
                    breathing room.</p>
            </div>

            <div :style="{ width: '50%' }">
                <p class="txtbtn">
                    <a href="/" class="atxt">Product</a>·
                    <a href="/" class="atxt">Field
                        guide </a>·
                    <a href="/" class="atxt">Privacy</a>·
                    <a href="/" class="atxt">Contact</a>
                </p>
                <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">Educational planning, not
                    personalized financial advice.</p>
            </div>
        </div>
        <div :style="{ backgroundColor: '#DBE1D8', height: '1px', width: '100%' }"></div>
        <p :style="{ color: '#66756E', fontFamily: 'Inter', fontSize: '11px' }">© 2026 Buffer. Sample figures are
            illustrative. USD throughout.</p>
    </div>
</template>

<style scoped>
.flexDiv {
    height: 16px;
    display: flex;
    justify-content: center;
    gap: 30px;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.txt {
    font-size: 13px;
    font-weight: lighter;
    font-family: 'Inter';
    color: #263A33;
}

h2 {
    font-size: 28px;
    font-weight: bold;
    color: #263A33;
    font-family: 'Lora';
}

h3 {
    color: #263A33;
    font-Family: 'Lora';
    font-Size: 42px,
}

.btnDiv {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 12px;
}

.mainCon {
    padding: 72px 100px 72px 100px;
    display: flex;
    gap: 50px;
}

.atxt {
    text-decoration: none;
    color: #263A33;
    font-Family: 'Inter';
    font-Size: 12px;
}

.txtbtn {
    color: #263A33;
    display: flex;
    gap: 10px;
    align-items: center;
}



.smallCon {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>